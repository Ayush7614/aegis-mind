# Render: vhs demo/tapes/spring-scaffold.tape  (run from repo root)
Output website/public/demos/opentaint-spring-scaffold.gif

Set Shell bash
Set Framerate 24
Set FontSize 15
Set Width 1460
Set Height 820
Set Padding 28
Set TypingSpeed 40ms
Set Theme '{ "name": "AegisMind", "background": "#060912", "foreground": "#d7e2f4", "cursor": "#00ff9c", "selection": "#11304a", "black": "#0b1020", "red": "#ff2d55", "green": "#00ff9c", "yellow": "#ffb020", "blue": "#2de2ff", "magenta": "#8b5cf6", "cyan": "#2de2ff", "white": "#c7d3e8", "brightBlack": "#3a4566", "brightRed": "#ff5c7a", "brightGreen": "#5cffc0", "brightYellow": "#ffc864", "brightBlue": "#7fefff", "brightMagenta": "#b594ff", "brightCyan": "#9ff3ff", "brightWhite": "#ffffff" }'

# Launch the replay hidden + cleared so no demo launch command is shown.
Hide
Type "clear && bash demo/bin/scaffold-demo.sh"
Enter
Show

Sleep 14s
Screenshot website/public/demos/opentaint-spring-scaffold.png
Sleep 2s
