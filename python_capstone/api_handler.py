"""
CineVerse AI: Multi-Lingual Hybrid Movie Recommendation Engine
Data Science Capstone Project
Module: api_handler.py
"""

import os
import requests
from typing import Dict, Any, Optional, List

TMDB_BASE_URL = "https://api.themoviedb.org/3"
TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w780"

class TMDBClient:
    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or os.getenv("TMDB_API_KEY", "")
        self.session = requests.Session()

    def _get(self, endpoint: str, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """Makes authenticated GET request with fallback error handling."""
        if not self.api_key:
            return {"error": "TMDB_API_KEY is not configured."}
        
        params = params or {}
        params["api_key"] = self.api_key
        url = f"{TMDB_BASE_URL}/{endpoint.lstrip('/')}"
        
        try:
            res = self.session.get(url, params=params, timeout=5)
            res.raise_for_status()
            return res.json()
        except requests.RequestException as e:
            return {"error": str(e)}

    def get_movie_details(self, tmdb_id: int) -> Dict[str, Any]:
        """Fetches primary details, runtime, genres, and taglines."""
        return self._get(f"movie/{tmdb_id}")

    def get_watch_providers(self, tmdb_id: int, region: str = "IN") -> Dict[str, List[Dict[str, str]]]:
        """
        Retrieves streaming providers categorized into Free vs Flatrate/Paid
        for the specified country code (e.g., 'IN' for India, 'US' for USA).
        """
        data = self._get(f"movie/{tmdb_id}/watch/providers")
        results = data.get("results", {}).get(region, {})
        
        free_providers = results.get("free", []) or results.get("ads", [])
        paid_providers = results.get("flatrate", []) or results.get("buy", [])
        
        return {
            "free": [{"name": p["provider_name"], "logo": f"{TMDB_IMAGE_BASE}{p['logo_path']}"} for p in free_providers],
            "paid": [{"name": p["provider_name"], "logo": f"{TMDB_IMAGE_BASE}{p['logo_path']}"} for p in paid_providers]
        }

    def get_trailer_key(self, tmdb_id: int) -> Optional[str]:
        """Fetches the official YouTube trailer video key."""
        videos = self._get(f"movie/{tmdb_id}/videos").get("results", [])
        for vid in videos:
            if vid.get("site") == "YouTube" and vid.get("type") in ["Trailer", "Teaser"]:
                return vid.get("key")
        return None

if __name__ == "__main__":
    client = TMDBClient()
    print("[+] TMDB Client initialized with regional watch provider routing.")
