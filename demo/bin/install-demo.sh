#!/usr/bin/env bash
# Emulates the output of `curl -fsSL https://opentaint.org/install.sh | bash`
# for recording a demo GIF. The local username is masked with a red "paint" bar.

RED=$'\e[48;2;255;45;85m'; R=$'\e[0m'
DIM=$'\e[2m'; BOLD=$'\e[1m'
GREEN=$'\e[38;5;48m'; CYAN=$'\e[38;5;45m'; GREY=$'\e[38;5;245m'; WHITE=$'\e[38;5;255m'

# red paint bar masking the username (~11 cols wide)
bar() { printf '%s%*s%s' "$RED" 11 '' "$R"; }
p() { sleep "${1:-0.22}"; }

printf "Version: %slatest%s\n" "$GREY" "$R"; p
printf "Detecting platform...\n"; p
printf "Platform: %sdarwin_arm64%s\n" "$CYAN" "$R"; p
printf "Install directory: /Users/"; bar; printf "/.opentaint/install\n"; p
printf "Downloading opentaint-full_darwin_arm64.tar.gz...\n"; p 0.3

# animated progress bar
total=46
for i in $(seq 1 "$total"); do
  pct=$(awk "BEGIN{printf \"%.1f\", $i/$total*100}")
  printf "\r%s%s%s %s%s%%%s" "$CYAN" "$(printf '#%.0s' $(seq 1 "$i"))" "$R" "$GREEN" "$pct" "$R"
  sleep 0.025
done
printf "\n"; p 0.2

printf "Verifying checksum...\n"; p
printf "%sChecksum verified.%s\n" "$GREEN" "$R"; p
printf "Extracting...\n"; p
printf "Installing to /Users/"; bar; printf "/.opentaint/install...\n"; p 0.4
printf "\n"
printf "%sopentaint installed successfully!%s\n" "$BOLD$GREEN" "$R"; p
printf "\n"
printf "%sOPENTAINT_BINARY_PATH%s=/Users/" "$GREY" "$R"; bar; printf "/.opentaint/install/opentaint\n"; p
printf "\n"
printf "Add the following to your shell profile to use opentaint:\n\n"
printf "  %sexport%s PATH=\"/Users/" "$CYAN" "$R"; bar; printf "/.opentaint/install:\$PATH\"\n"; p
printf "\nThen restart your shell or run the export command above.\n"
