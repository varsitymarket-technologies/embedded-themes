<!-- #/engine/head/encode/:BEGIN -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EROS</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #030303;
            --border-color: #1A1A1A;
            --text-primary: #EDEDED;
            --text-muted: #666666;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
        }
        .font-mono { font-family: 'Space Mono', monospace; }
        .view-section { display: none; }
        .view-section.active { display: block; animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .shopify-input {
            border: 1px solid var(--border-color);
            background-color: transparent;
            color: var(--text-primary);
            border-radius: 0;
            transition: border-color 0.2s ease;
        }
        .shopify-input:focus { outline: none; border-color: #FFFFFF; }
        .btn-invert { background-color: var(--text-primary); color: var(--bg-color); transition: all 0.2s; }
        .btn-invert:hover { background-color: transparent; color: var(--text-primary); border: 1px solid var(--text-primary); }
        .btn-outline { border: 1px solid var(--border-color); background-color: transparent; color: var(--text-primary); transition: all 0.2s; }
        .btn-outline:hover { border-color: var(--text-primary); background-color: var(--text-primary); color: var(--bg-color); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-color); border-left: 1px solid var(--border-color); }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #666; }
        @keyframes ticker { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
        .ticker-wrap { overflow: hidden; white-space: nowrap; box-sizing: border-box; }
        .ticker { display: inline-block; animation: ticker 20s linear infinite; }
    </style>
</head>
<!-- #/engine/head/encode/:END; -->
