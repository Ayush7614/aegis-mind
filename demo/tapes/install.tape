# Render: vhs demo/tapes/install.tape  (run from repo root)
Output website/public/demos/opentaint-install.gif

Set Shell bash
Set FontSize 20
Set Width 1320
Set Height 860
Set Padding 34
Set TypingSpeed 50ms
Set Theme '{ "name": "AegisMind", "background": "#060912", "foreground": "#d7e2f4", "cursor": "#00ff9c", "selection": "#11304a", "black": "#0b1020", "red": "#ff2d55", "green": "#00ff9c", "yellow": "#ffb020", "blue": "#2de2ff", "magenta": "#8b5cf6", "cyan": "#2de2ff", "white": "#c7d3e8", "brightBlack": "#3a4566", "brightRed": "#ff5c7a", "brightGreen": "#5cffc0", "brightYellow": "#ffc864", "brightBlue": "#7fefff", "brightMagenta": "#b594ff", "brightCyan": "#9ff3ff", "brightWhite": "#ffffff" }'

Hide
Type "source demo/.demorc-install && clear" Enter
Show

Sleep 800ms
Type "curl -fsSL https://opentaint.org/install.sh | bash" Sleep 500ms Enter
Sleep 8500ms
Screenshot website/public/demos/opentaint-install.png
Sleep 1800ms
