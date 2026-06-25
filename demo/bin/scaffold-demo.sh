#!/usr/bin/env bash
# Replays a "scaffold + run a Spring Boot app" session for a demo recording.
# Prompts and absolute paths have the local username masked with a red bar.

RED=$'\e[48;2;255;45;85m'; R=$'\e[0m'
GREY=$'\e[38;5;245m'; DIM=$'\e[2m'; BOLD=$'\e[1m'
GREEN=$'\e[38;5;48m'; CYAN=$'\e[38;5;45m'; WHITE=$'\e[38;5;255m'
YELLOW=$'\e[38;5;221m'; REDFG=$'\e[38;5;203m'

B="${RED}           ${R}"            # 11-space red paint bar (masks the username)

# prompt for a given dir basename
P() { printf "%s(base)%s %s %s%s%s %% " "$GREY" "$R" "$B" "$WHITE" "$1" "$R"; }
# typed command line: dir, command
C() { P "$1"; printf "%s\n" "$2"; sleep 0.5; }
log() { # time, thread, logger, message
  printf "%s%s%s  %sINFO%s 32673 %s---%s [spring-app] [%s] %s%-40s%s : %s\n" \
    "$GREY" "$1" "$R" "$GREEN" "$R" "$DIM" "$R" "$2" "$CYAN" "$3" "$R" "$4"
  sleep 0.12
}

sleep 0.5

# 1) curl the starter
P "projects"
cat <<EOF
curl https://start.spring.io/starter.zip \\
  -d type=maven-project -d language=java -d bootVersion=3.5.4 \\
  -d baseDir=spring-app -d groupId=com.example -d artifactId=spring-app \\
  -d name=spring-app -d packageName=com.example.springapp \\
  -d javaVersion=21 -d dependencies=web -o spring-app.zip
EOF
sleep 0.5
printf "%s  %% Total    %% Received %% Xferd  Average Speed   Time    Time     Time  Current\n" "$GREY"
printf "                                 Dload  Upload   Total   Spent    Left  Speed%s\n" "$R"
printf "100 15873  100 15680  100   193  27675    340 --:--:-- --:--:-- --:--:-- 27994\n"
sleep 0.5

# 2) unzip
C "projects" "unzip spring-app.zip && rm spring-app.zip"
printf "Archive:  spring-app.zip\n"; sleep 0.1
for entry in \
  "creating: spring-app/" \
  "inflating: spring-app/.gitattributes" \
  "inflating: spring-app/mvnw.cmd" \
  "creating: spring-app/src/" \
  "creating: spring-app/src/test/java/com/example/springapp/" \
  "inflating: spring-app/src/test/java/com/example/springapp/SpringAppApplicationTests.java" \
  "creating: spring-app/src/main/resources/static/" \
  "creating: spring-app/src/main/resources/templates/" \
  "inflating: spring-app/src/main/resources/application.properties" \
  "creating: spring-app/src/main/java/com/example/springapp/" \
  "inflating: spring-app/src/main/java/com/example/springapp/SpringAppApplication.java" \
  "creating: spring-app/.mvn/wrapper/" \
  "inflating: spring-app/.mvn/wrapper/maven-wrapper.properties" \
  "inflating: spring-app/.gitignore" \
  "inflating: spring-app/mvnw" \
  "inflating: spring-app/HELP.md" \
  "inflating: spring-app/pom.xml"; do
  verb="${entry%%: *}"; path="${entry#*: }"
  if [ "$verb" = "creating" ]; then
    printf "   %s%s:%s %s\n" "$CYAN" "$verb" "$R" "$path"
  else
    printf "  %s%s:%s %s\n" "$GREEN" "$verb" "$R" "$path"
  fi
  sleep 0.06
done
sleep 0.3

# 3) wrong dir attempt
C "projects" "./mvnw spring-boot:run"
printf "%szsh: no such file or directory: ./mvnw%s\n" "$REDFG" "$R"; sleep 0.3

# 4) toolchain checks
C "projects" "java -version"
printf "openjdk version \"21.0.11\" 2026-04-21\n"
printf "OpenJDK Runtime Environment Homebrew (build 21.0.11)\n"
printf "OpenJDK 64-Bit Server VM Homebrew (build 21.0.11, mixed mode, sharing)\n"; sleep 0.3
C "projects" "mvn -version"
printf "%szsh: command not found: mvn%s\n" "$REDFG" "$R"; sleep 0.3

# 5) into the project, run with the wrapper
C "projects" "cd spring-app"
C "spring-app" "chmod +x mvnw"
C "spring-app" "./mvnw spring-boot:run"
sleep 0.3
mvn_base="https://repo.maven.apache.org/maven2/org/springframework/boot"
printf "%s[INFO]%s Scanning for projects...\n" "$CYAN" "$R"; sleep 0.2
printf "%sDownloading from central:%s %s/spring-boot-starter-parent/3.5.4/spring-boot-starter-parent-3.5.4.pom\n" "$GREY" "$R" "$mvn_base"; sleep 0.25
printf "%sDownloaded from central:%s %s/spring-boot-starter-parent/3.5.4/spring-boot-starter-parent-3.5.4.pom (13 kB at 34 kB/s)\n" "$GREEN" "$R" "$mvn_base"; sleep 0.2
printf "%sDownloading from central:%s %s/spring-boot-dependencies/3.5.4/spring-boot-dependencies-3.5.4.pom\n" "$GREY" "$R" "$mvn_base"; sleep 0.25
printf "%sDownloaded from central:%s %s/spring-boot-dependencies/3.5.4/spring-boot-dependencies-3.5.4.pom (96 kB at 3.7 MB/s)\n" "$GREEN" "$R" "$mvn_base"; sleep 0.2
printf "%s[INFO]%s Attaching agents: []\n" "$CYAN" "$R"; sleep 0.4

# 6) banner
printf "\n%s" "$GREEN"
cat <<'BANNER'
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
BANNER
printf "%s :: Spring Boot ::%s                (v3.5.4)\n\n" "$GREEN" "$R"
sleep 0.5

# 7) startup logs (username masked in paths)
log "2026-06-25T15:11:51.870+05:30" "           main" "c.e.springapp.SpringAppApplication" \
  "Starting SpringAppApplication using Java 21.0.11 with PID 32673 (/Users/${B}/Projects/spring-app/target/classes started by ${B} in /Users/${B}/Projects/spring-app)"
log "2026-06-25T15:11:51.871+05:30" "           main" "c.e.springapp.SpringAppApplication" \
  "No active profile set, falling back to 1 default profile: \"default\""
log "2026-06-25T15:11:52.110+05:30" "           main" "o.s.b.w.embedded.tomcat.TomcatWebServer" \
  "Tomcat initialized with port 8080 (http)"
log "2026-06-25T15:11:52.116+05:30" "           main" "o.apache.catalina.core.StandardService" \
  "Starting service [Tomcat]"
log "2026-06-25T15:11:52.117+05:30" "           main" "o.apache.catalina.core.StandardEngine" \
  "Starting Servlet engine: [Apache Tomcat/10.1.43]"
log "2026-06-25T15:11:52.135+05:30" "           main" "o.a.c.c.C.[Tomcat].[localhost].[/]" \
  "Initializing Spring embedded WebApplicationContext"
log "2026-06-25T15:11:52.135+05:30" "           main" "w.s.c.ServletWebServerApplicationContext" \
  "Root WebApplicationContext: initialization completed in 250 ms"
log "2026-06-25T15:11:52.228+05:30" "           main" "o.s.b.w.embedded.tomcat.TomcatWebServer" \
  "Tomcat started on port 8080 (http) with context path '/'"
printf "%s2026-06-25T15:11:52.231+05:30%s  %sINFO%s 32673 %s---%s [spring-app] [           main] %s%-40s%s : %sStarted SpringAppApplication in 0.497 seconds (process running for 0.591)%s\n" \
  "$GREY" "$R" "$GREEN" "$R" "$DIM" "$R" "$CYAN" "c.e.springapp.SpringAppApplication" "$R" "$BOLD$GREEN" "$R"
sleep 0.5
log "2026-06-25T15:12:17.850+05:30" "nio-8080-exec-1" "o.a.c.c.C.[Tomcat].[localhost].[/]" \
  "Initializing Spring DispatcherServlet 'dispatcherServlet'"
log "2026-06-25T15:12:17.851+05:30" "nio-8080-exec-1" "o.s.web.servlet.DispatcherServlet" \
  "Initializing Servlet 'dispatcherServlet'"
log "2026-06-25T15:12:17.852+05:30" "nio-8080-exec-1" "o.s.web.servlet.DispatcherServlet" \
  "Completed initialization in 1 ms"
sleep 0.4
