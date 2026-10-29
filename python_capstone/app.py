"""
CineVerse AI: Multi-Lingual Hybrid Movie Recommendation Engine
Data Science Capstone Project
Module: app.py (Streamlit Web Dashboard)
"""

import streamlit as st
import pandas as pd
import json

# Set Page Config
st.set_page_config(
    page_title="CineVerse AI - Movie Recommendation Engine",
    page_icon="🎬",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Dark Cinematic CSS Injection (Netflix & HDHub4u aesthetic)
st.markdown("""
<style>
    .main { background-color: #0e0e11; color: #f4f4f5; }
    .stButton>button {
        background-color: #e50914;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.5rem 1.25rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }
    .stButton>button:hover {
        background-color: #b20710;
        transform: translateY(-2px);
    }
</style>
""", unsafe_allow_html=True)

# Application Header
st.title("🎬 CineVerse AI")
st.caption("Multi-Lingual Hybrid Movie Recommendation & Discovery Engine (Data Science Capstone)")

# Sidebar: Movie Decider & Filter Matrix
with st.sidebar:
    st.header("🎯 Movie Decider Matrix")
    selected_language = st.selectbox(
        "Primary Cinema Language",
        ["All", "Hindi (Bollywood)", "English (Hollywood)", "Telugu (Tollywood)", "Tamil (Kollywood)", "Korean", "Spanish"]
    )
    selected_mood = st.selectbox(
        "Vibe & Emotional Mood",
        ["Any Vibe", "Mind-Bending", "Adrenaline Thriller", "Gritty Crime", "Heartwarming Romance", "Epic Mythology", "Feel-Good Comedy"]
    )
    min_rating = st.slider("Minimum IMDb Rating", min_value=6.0, max_value=9.5, value=7.5, step=0.1)
    max_runtime = st.slider("Maximum Runtime (Minutes)", min_value=90, max_value=240, value=180, step=10)
    audio_type = st.radio("Audio Format", ["All Audio", "Dual Audio [Hindi + Eng]", "Multi-Audio"])

st.success("✨ Recommender Engine Ready. Select any title to compute 24-dimensional semantic similarity vectors.")
