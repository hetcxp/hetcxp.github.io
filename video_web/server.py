import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml'
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor sirviendo en http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
