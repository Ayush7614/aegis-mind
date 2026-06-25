# Render: vhs demo/tapes/scan.tape  (run from repo root)
Output website/public/demos/opentaint-scan.gif

Set Shell bash
Set Framerate 24
Set FontSize 15
Set Width 1480
Set Height 880
Set Padding 28
Set TypingSpeed 35ms
Set Theme '{ "name": "AegisMind", "background": "#060912", "foreground": "#d7e2f4", "cursor": "#00ff9c", "selection": "#11304a", "black": "#0b1020", "red": "#ff2d55", "green": "#00ff9c", "yellow": "#ffb020", "blue": "#2de2ff", "magenta": "#8b5cf6", "cyan": "#2de2ff", "white": "#c7d3e8", "brightBlack": "#3a4566", "brightRed": "#ff5c7a", "brightGreen": "#5cffc0", "brightYellow": "#ffc864", "brightBlue": "#7fefff", "brightMagenta": "#b594ff", "brightCyan": "#9ff3ff", "brightWhite": "#ffffff" }'

Hide
Type "source demo/.demorc-install && clear" Enter
Show

Sleep 700ms
Type "opentaint scan" Sleep 400ms Enter
Sleep 4500ms
Type "opentaint summary ~/.opentaint/cache/spring-app-cba2bab8/project-model/sources/opentaint.sarif --show-findings" Sleep 400ms Enter
Sleep 1800ms
Screenshot website/public/demos/opentaint-scan.png
Sleep 1800ms
