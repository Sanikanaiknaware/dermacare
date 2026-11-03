DERMACARE FRONTEND SETUP
1. Extract this ZIP file.
2. Open VS Code > File > Open Folder > select skin_condition_frontend.
3. Install the Live Server extension (Ctrl+Shift+X, search Live Server).
4. Right-click index.html > Open with Live Server.
5. Open login.html with Live Server. Sign in using any valid email and a password of at least 4 characters.
6. Use the left navigation to open Skin Detection, Progress Monitoring, History and Reports. Use Log out in the top bar to sign out.

This is frontend-only HTML, CSS and JavaScript. No Python, Flask, TensorFlow, MySQL or dataset is needed to run it.
Images and records are saved in this browser's localStorage. Browser data clearing may remove them.
The demo result is placeholder content; no AI model is connected. The comparison page only displays two images side by side and does not assess medical change. Do not use this prototype for medical decisions; consult a qualified dermatologist.

DEMO AUTHENTICATION
The sign-in and log-out flow is frontend-only. It stores a demo session in this browser localStorage and does not verify passwords or provide real account security. For production, connect authentication to a secure backend (for example, Firebase Authentication or your own server).
