import http.server
import socketserver
import os
import sys

DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "outscale-design-studio.base44.app")
PORT = 3000

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        # Resolve requested file path
        path = self.translate_path(self.path)
        
        # If path is a directory without index.html or doesn't exist, and is not an asset/api, fallback to index.html
        if not os.path.exists(path) and not self.path.startswith('/assets/') and not self.path.startswith('/api/'):
            self.path = '/index.html'
        elif os.path.isdir(path) and not os.path.exists(os.path.join(path, 'index.html')):
            self.path = '/index.html'

        return super().do_GET()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), SPAHandler) as httpd:
        print(f"Server started at http://localhost:{port}")
        httpd.serve_forever()
