import { useState } from 'react';
import { X, Copy, Check, FileCode, BookOpen, Download, Terminal, CheckCircle } from 'lucide-react';
import { CAPSTONE_FILES } from '../data/capstonePythonCode';

interface CapstoneDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CapstoneDocsModal({ isOpen, onClose }: CapstoneDocsModalProps) {
  const [selectedFileIdx, setSelectedFileIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentFile = CAPSTONE_FILES[selectedFileIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentFile.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentFile.filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#111114] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-600/20 text-red-500 rounded-lg border border-red-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white font-display">
                Academic Capstone Documentation & Python Source
              </h3>
              <p className="text-xs text-zinc-400">
                Official Capstone Project Deliverables · VS Code & Terminal Execution Package
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs Strip */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-950 border-b border-zinc-800/80 overflow-x-auto no-scrollbar">
          {CAPSTONE_FILES.map((file, idx) => (
            <button
              key={file.filename}
              onClick={() => setSelectedFileIdx(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap shrink-0 ${
                selectedFileIdx === idx
                  ? 'bg-red-600 text-white font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{file.filename}</span>
            </button>
          ))}
        </div>

        {/* Code Viewport Toolbar */}
        <div className="p-3 bg-[#16161b] border-b border-zinc-800/80 flex items-center justify-between text-xs">
          <span className="text-zinc-300 font-medium truncate max-w-lg">
            {currentFile.description}
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md font-mono text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md font-mono text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-4 bg-[#0a0a0c] font-mono text-xs text-zinc-300 leading-relaxed selection:bg-red-600/30">
          <pre className="whitespace-pre overflow-x-auto">
            <code>{currentFile.code}</code>
          </pre>
        </div>

        {/* Footer Quick Setup Hint */}
        <div className="p-3 bg-zinc-950 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <Terminal className="w-3.5 h-3.5 text-red-500" />
            <span>Local Run Command: </span>
            <code className="text-zinc-200 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              streamlit run app.py
            </code>
          </div>
          <span className="text-[11px] text-zinc-500">
            Memory footprint: ~450 MB RAM · Zero GPU required
          </span>
        </div>
      </div>
    </div>
  );
}
