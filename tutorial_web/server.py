import http.server
import socketserver
import json
import os

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

class CustomHandler(Handler):
    def do_POST(self):
        if self.path == '/save_coords':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            filepath = 'temp_coords.json'
            
            # Leer datos existentes si el archivo existe
            if os.path.exists(filepath):
                with open(filepath, 'r') as f:
                    try:
                        coords_db = json.load(f)
                    except:
                        coords_db = {}
            else:
                coords_db = {}
                
            # Actualizar con las nuevas coordenadas
            coords_db[str(data['slide_id'])] = data['coords']
            
            with open(filepath, 'w') as f:
                json.dump(coords_db, f, indent=4)
                
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "success"}')
        else:
            self.send_response(404)
            self.end_headers()

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Servidor de desarrollo activo en puerto {PORT}")
    httpd.serve_forever()
