# scripts/ask_developer.py
import urllib.request
import json
import sys

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 ask_developer.py <prompt_file_or_text>")
        sys.exit(1)
        
    arg = sys.argv[1]
    # Check if arg is a file or raw string
    try:
        with open(arg, 'r', encoding='utf-8') as f:
            prompt = f.read()
    except Exception:
        prompt = arg

    url = "http://localhost:11434/api/chat"
    data = {
        "model": "qwen3:latest",
        "messages": [
            {
                "role": "system",
                "content": "Eres el Developer LLM (Qwen3). Tu función es generar código fuente limpio, robusto y sin placeholders para el juego Galaxia de Palabras.\nSigue exactamente las instrucciones y el pseudocódigo del Arquitecto.\nGenera únicamente el código solicitado, preferiblemente en formato de bloques SEARCH/REPLACE si estás editando, o el código completo si es un archivo nuevo."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "stream": False
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )

    try:
        with urllib.request.urlopen(req) as response:
            res_data = json.loads(response.read().decode('utf-8'))
            print(res_data['message']['content'])
    except Exception as e:
        print(f"Error calling local Ollama API: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == '__main__':
    main()
