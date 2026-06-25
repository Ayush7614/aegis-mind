import CodeBlock from "../components/CodeBlock";
import Callout from "../components/Callout";
import TerminalDemo from "../components/TerminalDemo";

export const openTaintToc = [
  { id: "what-is", label: "What is OpenTaint?" },
  { id: "taint-101", label: "Taint analysis in 60s" },
  { id: "why", label: "Why it matters" },
  { id: "how-it-works", label: "How it works" },
  { id: "install", label: "Installation" },
  { id: "setup", label: "Set up & verify" },
  { id: "first-scan", label: "Your first scan" },
  { id: "examples", label: "Hands-on examples" },
  { id: "ai-workflows", label: "AI agent workflows" },
  { id: "ci", label: "CI/CD integration" },
  { id: "tips", label: "Pro tips & gotchas" },
  { id: "wrap", label: "Wrap-up" },
];

export function OpenTaintGuide() {
  return (
    <article className="prose-cyber">
      <p className="lead text-lg text-slate-300">
        AI now writes production code faster than any security team can review it.
        The two classes of tools we built to catch its mistakes each force a bad
        trade-off — and <strong>OpenTaint</strong> exists to break that trade-off.
        This is a complete, run-it-yourself guide: what the tool is, how taint
        analysis works, how to install and scan, four worked examples, and the AI
        agent workflows that let it scale.
      </p>

      <Callout type="info" title="TL;DR">
        <ul>
          <li>
            Open-source, formal, <strong>inter-procedural taint analysis</strong>{" "}
            engine — an Apache-2.0 alternative to Semgrep Pro and CodeQL.
          </li>
          <li>
            Tracks untrusted data across <strong>function boundaries,
            persistence layers, aliases, and async code</strong>.
          </li>
          <li>
            Lets an <strong>LLM agent distill one finding into a deterministic
            rule</strong> — you pay the model once, not on every scan.
          </li>
          <li>
            Replays that rule across your whole codebase, on every commit, at{" "}
            <strong>zero token cost</strong>.
          </li>
          <li>
            Deepest coverage today for <strong>Java / Kotlin / Spring</strong>;
            Python, Go, C#, JS &amp; TS on the roadmap.
          </li>
        </ul>
      </Callout>

      {/* 1 */}
      <h2 id="what-is">1. What is OpenTaint?</h2>
      <p>
        OpenTaint is a static application security testing (SAST) engine focused
        on one thing done extremely well: <strong>tracking the flow of untrusted
        data</strong> through your program. It is written in Go, self-hostable,
        and ships as one stack — engine, rules, and CI integrations — under
        Apache 2.0 (engine) and MIT (CLI, GitHub Action, GitLab template, rules).
      </p>
      <p>Three sentences capture the whole pitch:</p>
      <ul>
        <li>
          <strong>It finds what pattern matchers miss.</strong> A formal
          inter-procedural dataflow engine follows tainted input even when it
          crosses functions, gets stored and re-read, or is aliased.
        </li>
        <li>
          <strong>It pays the model once, not on every scan.</strong> An AI agent
          turns a single confirmed vulnerability into a reusable taint rule; the
          deterministic engine then replays it in minutes of CPU.
        </li>
        <li>
          <strong>It is batteries-included and open.</strong> Today it is the
          most thorough taint engine for <strong>Java / Kotlin / Spring</strong>,
          with Python, Go, C#, JavaScript and TypeScript on the roadmap.
        </li>
      </ul>

      {/* 2 */}
      <h2 id="taint-101">2. Taint analysis in 60 seconds</h2>
      <p>
        "Taint" is a label. You mark certain inputs as untrusted (a{" "}
        <strong>source</strong>), and certain dangerous operations as things that
        must never receive untrusted data (a <strong>sink</strong>). The engine
        then asks a single question: <em>can data flow from any source to any
        sink?</em> If yes — and nothing along the way neutralizes it (a{" "}
        <strong>sanitizer</strong>) — that path is a vulnerability.
      </p>
      <CodeBlock
        lang="text"
        title="the mental model"
        code={`SOURCE                 PROPAGATION                 SINK
req.getParameter()  →  service.process(x)  →  statement.execute(sql)
(untrusted input)      (taint flows across       (dangerous op:
                        function boundaries)       SQL injection!)

         ▲ a sanitizer anywhere on this path (e.g. a parameterized
           query / encoder) would "clean" the taint and kill the finding`}
      />
      <p>
        The hard part is <strong>propagation</strong>. Naive tools only look at a
        single line or function (intra-procedural). Real bugs span many hops:
        controller → service → repository → ORM. Following taint across all those
        hops is <strong>inter-procedural</strong> analysis, and it is exactly what
        OpenTaint specializes in.
      </p>

      {/* 3 */}
      <h2 id="why">3. Why it matters — the AI-era gap</h2>
      <p>
        There are two existing families of tools, and each makes one painful
        compromise:
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse font-mono text-sm">
          <thead>
            <tr className="border-b border-line text-left text-slate-300">
              <th className="py-3 pr-4">Tooling</th>
              <th className="py-3 pr-4">Strength</th>
              <th className="py-3">The catch</th>
            </tr>
          </thead>
          <tbody className="text-slate-400">
            <tr className="border-b border-line/60">
              <td className="py-3 pr-4 text-cyber">AST-pattern matchers</td>
              <td className="py-3 pr-4">Free, fast (Semgrep OSS, ast-grep, linters)</td>
              <td className="py-3">Match syntax, not data flow — cross-function taint slips past</td>
            </tr>
            <tr className="border-b border-line/60">
              <td className="py-3 pr-4 text-violet">LLM security agents</td>
              <td className="py-3 pr-4">Find what patterns miss</td>
              <td className="py-3">Re-read code every run; tokens add up; probabilistic</td>
            </tr>
            <tr>
              <td className="py-3 pr-4 text-neon">OpenTaint</td>
              <td className="py-3 pr-4">Formal inter-procedural depth</td>
              <td className="py-3">Deterministic, replayable, agent-assisted — best of both</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The deep, inter-procedural analysis that actually catches data-flow bugs
        has historically been locked inside proprietary tools. OpenTaint opens it
        up and makes the LLM a <em>one-time rule author</em> rather than a
        per-scan expense.
      </p>

      {/* 4 */}
      <h2 id="how-it-works">4. How OpenTaint works under the hood</h2>
      <p>The pipeline, conceptually, is four stages:</p>
      <ol>
        <li>
          <strong>Build &amp; parse.</strong> OpenTaint understands your build so
          it can resolve types, dependencies and method targets — this is what
          enables real inter-procedural reasoning rather than guessing.
        </li>
        <li>
          <strong>Model the graph.</strong> It constructs a call graph and
          dataflow graph, including aliasing and (for Spring) framework-specific
          wiring like controllers, request mappings and beans.
        </li>
        <li>
          <strong>Apply rules.</strong> Rules declare sources, sinks, sanitizers,
          and library "pass-through" approximations (how data moves through code
          it can't see, e.g. third-party libs).
        </li>
        <li>
          <strong>Solve &amp; report.</strong> The engine computes reachable
          source→sink paths and emits results, typically as{" "}
          <strong>SARIF</strong> so any IDE or CI can consume them.
        </li>
      </ol>
      <Callout type="tip" title="Why SARIF matters">
        SARIF is the standard interchange format for static analysis. Because
        OpenTaint emits SARIF, findings render natively in GitHub code scanning,
        VS Code, and most security dashboards — no custom glue required.
      </Callout>

      {/* 5 */}
      <h2 id="install">5. Installation — every method</h2>
      <p>
        Pick whichever fits your environment. All commands below are taken from
        the official quick-start.
      </p>

      <h3>Install script (Linux / macOS)</h3>
      <CodeBlock code={`curl -fsSL https://opentaint.org/install.sh | bash`} />
      <p>
        The installer detects your platform, verifies a checksum, drops the
        binary in <code>~/.opentaint/install</code>, and prints the{" "}
        <code>PATH</code> line to add to your shell profile:
      </p>
      <TerminalDemo
        src="demos/opentaint-install.gif"
        title="(base) ~ spring-app"
        caption="curl -fsSL https://opentaint.org/install.sh | bash"
      />

      <h3>Homebrew (Linux / macOS)</h3>
      <CodeBlock code={`brew install --cask seqra/tap/opentaint`} />

      <h3>Windows (PowerShell)</h3>
      <CodeBlock lang="powershell" code={`irm https://opentaint.org/install.ps1 | iex`} />

      <h3>npm (cross-platform)</h3>
      <CodeBlock
        code={`# global install
npm install -g @seqra/opentaint

# or run instantly, no install (needs Node.js)
npx @seqra/opentaint scan`}
      />

      <Callout type="warn" title="Verify before piping to a shell">
        Piping a remote script straight into <code>bash</code> or{" "}
        <code>iex</code> is convenient but executes whatever the server returns.
        On shared or production machines, download the script first, read it, then
        run it — or prefer Homebrew/npm which are checksum-backed.
      </Callout>

      {/* 6 */}
      <h2 id="setup">6. Set up a test project &amp; verify</h2>

      <h3>Scaffold a sample Spring app to test against</h3>
      <p>
        No project handy? Spin up a throwaway Spring Boot app straight from{" "}
        <a href="https://start.spring.io" target="_blank" rel="noreferrer">
          start.spring.io
        </a>
        , unzip it, and boot it once to confirm your toolchain (Java 21 + the
        Maven wrapper). This gives OpenTaint something real to chew on:
      </p>
      <CodeBlock
        lang="bash"
        code={`curl https://start.spring.io/starter.zip \\
  -d type=maven-project -d language=java -d bootVersion=3.5.4 \\
  -d baseDir=spring-app -d groupId=com.example -d artifactId=spring-app \\
  -d name=spring-app -d packageName=com.example.springapp \\
  -d javaVersion=21 -d dependencies=web -o spring-app.zip

unzip spring-app.zip && rm spring-app.zip
cd spring-app
chmod +x mvnw            # the wrapper ships without the exec bit
./mvnw spring-boot:run   # downloads Maven + Boot, then starts Tomcat on :8080`}
      />
      <TerminalDemo
        src="demos/opentaint-spring-scaffold.gif"
        title="(base) ~ spring-app"
        caption="scaffolding & running a Spring Boot app"
      />
      <Callout type="tip" title="A couple of gotchas (shown above)">
        Run <code>./mvnw</code> from <em>inside</em> the project (not the parent
        folder), and the wrapper needs <code>chmod +x mvnw</code> first. You only
        need <code>java</code> installed — the wrapper fetches Maven for you, so
        a missing <code>mvn</code> is fine. Stop the app with{" "}
        <code>Ctrl-C</code>; OpenTaint analyzes <em>source</em>, so it never
        needs the app actually running.
      </Callout>

      <h3>Verify OpenTaint</h3>
      <p>
        Confirm the binary is on your <code>PATH</code> and skim the available
        commands — OpenTaint is a Cobra-style CLI with subcommands for compiling,
        pulling artifacts, scanning, and summarizing SARIF:
      </p>
      <CodeBlock
        code={`opentaint --help
opentaint --version`}
      />
      <TerminalDemo
        src="demos/opentaint-help.gif"
        title="(base) ~ spring-app"
        caption="opentaint --help / --version"
      />

      {/* 7 */}
      <h2 id="first-scan">7. Your first scan</h2>
      <p>
        From inside the project, just run <code>scan</code>. OpenTaint compiles a{" "}
        <strong>project model</strong>, runs the analyzer, applies the bundled
        ruleset, writes a SARIF report into <code>~/.opentaint/cache</code>, and
        prints a clean box-drawing summary:
      </p>
      <CodeBlock code={`opentaint scan`} />
      <p>
        A fresh, hello-world scaffold has nothing dangerous in it, so the first
        scan reports <strong>0 findings</strong> — exactly what you want to
        confirm the toolchain end-to-end before you introduce real code:
      </p>
      <CodeBlock
        lang="text"
        title="opentaint scan — actual output"
        code={`╭─OpenTaint Compile and Scan─╮
╰─┬──────────────────────────╯
  ├─ Project        └─ ~/projects/spring-app
  ├─ Project model  └─ ~/.opentaint/cache/spring-app-cba2bab8/project-model
  ├─ Autobuilder    └─ custom (~/.opentaint/install/lib/opentaint-project-auto-builder.jar)
  ├─ Analyzer       └─ custom (~/.opentaint/install/lib/opentaint-project-analyzer.jar)
  └─ Bundled ruleset└─ custom (~/.opentaint/install/lib/rules)

✓ Compiling project model in 15s
✓ Analyzing project in 17s

╭─Scan Summary─╮
╰─┬────────────╯
  ├─ Findings
  │  ├─ Total: 0 findings
  │  ├─ Files affected: 0
  │  ├─ Rules executed: 78
  │  └─ Rules triggered: 0
  └─ Output
     ├─ Report: …/project-model/sources/opentaint.sarif
     └─ Log:    ~/.opentaint/logs/spring-app-cba2bab8/…log`}
      />
      <TerminalDemo
        src="demos/opentaint-scan.gif"
        title="(base) ~ spring-app"
        caption="opentaint scan + opentaint summary"
      />
      <p>
        The scan doesn&apos;t dump findings inline — it writes a SARIF report and
        points you at the <code>summary</code> subcommand. Pass{" "}
        <code>--show-findings</code> to print each finding (here, none yet):
      </p>
      <CodeBlock
        code={`opentaint summary ~/.opentaint/cache/spring-app-cba2bab8/project-model/sources/opentaint.sarif --show-findings`}
      />
      <Callout type="info" title="0 findings is the right answer here">
        The scaffold is a bare Spring Boot app, so there is genuinely nothing to
        find. In the next section we add a deliberately vulnerable endpoint and a
        custom rule so you can watch OpenTaint light up — and the same{" "}
        <code>scan → summary</code> loop is all you need.
      </Callout>

      {/* 8 */}
      <h2 id="examples">8. Hands-on examples</h2>
      <p>
        Four progressively richer examples, from a vulnerable Spring endpoint to
        a custom rule and CI output.
      </p>

      <h3>Example 1 — Catching cross-function SQL injection</h3>
      <p>
        Here is the kind of bug AST matchers routinely miss, because the source
        and sink live in different files and the taint flows through a service
        layer:
      </p>
      <CodeBlock
        lang="java"
        title="UserController.java"
        code={`@RestController
public class UserController {
    private final UserService service;

    @GetMapping("/users/search")
    public List<User> search(@RequestParam String name) {
        // 'name' is untrusted — this is the SOURCE
        return service.find(name);
    }
}`}
      />
      <CodeBlock
        lang="java"
        title="UserRepository.java"
        code={`@Repository
public class UserRepository {
    private final DataSource ds;

    public List<User> rawByName(String name) throws SQLException {
        String sql = "SELECT * FROM users WHERE name = '" + name + "'";
        try (Statement st = ds.getConnection().createStatement()) {
            // tainted 'name' reaches a raw query — this is the SINK
            return map(st.executeQuery(sql));
        }
    }
}`}
      />
      <p>
        A line-by-line linter sees nothing wrong in the controller, and the
        repository "just builds a string." OpenTaint connects{" "}
        <code>@RequestParam name</code> → <code>service.find</code> →{" "}
        <code>rawByName</code> → <code>executeQuery</code> and flags the full
        path. The fix it nudges you toward is a parameterized query, which acts as
        a sanitizer and removes the finding on the next scan.
      </p>

      <h3>Example 2 — Writing a custom taint rule</h3>
      <p>
        The real power move: teach OpenTaint about <em>your</em> code. Suppose you
        have an internal helper <code>Http.body()</code> that returns raw request
        bodies, and a logging sink <code>AuditLog.write()</code> that must never
        receive PII. You declare them as a source and sink:
      </p>
      <CodeBlock
        lang="yaml"
        title="rules/custom-pii.yaml (illustrative)"
        code={`rules:
  - id: pii-into-auditlog
    severity: high
    message: "Untrusted request body flows into AuditLog (PII leak risk)"
    sources:
      - method: "com.acme.http.Http#body()"
    sinks:
      - method: "com.acme.audit.AuditLog#write(java.lang.String)"
        taint-arg: 0
    sanitizers:
      - method: "com.acme.privacy.Redactor#redact(java.lang.String)"`}
      />
      <CodeBlock
        code={`# run a scan with your custom rules directory added
opentaint scan --rules ./rules .`}
      />
      <p>
        With the custom rule loaded and a deliberately vulnerable endpoint in the
        project, the same engine now reports findings — the built-in SQL
        injection plus your org-specific PII rule (this view is illustrative of
        what a non-zero result looks like):
      </p>
      <TerminalDemo
        src="demos/opentaint-custom-rule.gif"
        caption="opentaint scan --rules ./rules . (illustrative)"
      />
      <Callout type="tip" title="This is the cost-saving loop">
        You (or an agent) write this rule <em>once</em>. From then on, every
        scan and every future commit is checked against it deterministically —
        no LLM tokens spent re-discovering the same class of bug.
      </Callout>

      <h3>Example 3 — SARIF output + opening results</h3>
      <p>
        Every scan emits SARIF (the report path is printed under{" "}
        <code>Output → Report</code>). Because it&apos;s standard SARIF, you can
        feed it anywhere — <code>jq</code>, an IDE, or CI:
      </p>
      <CodeBlock
        code={`opentaint scan
report=~/.opentaint/cache/spring-app-cba2bab8/project-model/sources/opentaint.sarif

# count findings by severity with jq
jq '[.runs[].results[].level] | group_by(.) | map({(.[0]): length}) | add' "$report"`}
      />
      <p>
        Open that <code>.sarif</code> in VS Code (with the SARIF Viewer
        extension) or upload it to GitHub code scanning to get inline annotations
        on the exact source and sink lines.
      </p>

      <h3>Example 4 — Zero-install scan with Docker</h3>
      <p>
        No local toolchain? Mount your project and run the published image:
      </p>
      <CodeBlock
        code={`docker run --rm \\
  -v $(pwd):/project \\
  ghcr.io/seqra/opentaint:latest \\
  opentaint scan /project`}
      />
      <p>
        This is the most reproducible option — identical engine version every
        time — which makes it ideal for CI runners and for sharing a scan setup
        across a team.
      </p>

      {/* 9 */}
      <h2 id="ai-workflows">9. AI agent workflows</h2>
      <p>
        OpenTaint ships <strong>agent skills</strong> that turn static analysis
        into an end-to-end AppSec workflow. Install them with:
      </p>
      <CodeBlock code={`npx skills add https://github.com/seqra/opentaint`} />
      <p>
        The headline skill, <strong>appsec-agent</strong>, orchestrates a full
        project assessment: build the project, run OpenTaint, discover the attack
        surface, add targeted rules, model missing library data flows, triage
        findings, and optionally generate dynamic proof-of-concept checks for
        confirmed vulnerabilities.
      </p>
      <p>The included skills map cleanly onto the security-analysis loop:</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            t: "Scan & triage",
            c: "text-neon",
            items: ["build-project", "run-scan", "analyze-findings", "generate-poc"],
          },
          {
            t: "Coverage expansion",
            c: "text-cyber",
            items: [
              "triage-dependencies",
              "discover-attack-surface",
              "create-test-project",
              "create-rule",
              "assemble-lib-rules",
            ],
          },
          {
            t: "Dataflow modeling",
            c: "text-violet",
            items: [
              "analyze-external-methods",
              "create-pass-through-approximation",
              "create-dataflow-approximation",
              "debug-rule",
              "report-analyzer-issue",
            ],
          },
        ].map((g) => (
          <div key={g.t} className="rounded-xl border border-line bg-white/[0.02] p-5">
            <h4 className={`font-mono text-sm font-semibold ${g.c}`}>{g.t}</h4>
            <ul className="mt-3 space-y-1.5">
              {g.items.map((it) => (
                <li key={it} className="font-mono text-xs text-slate-400">
                  ▹ {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Callout type="info" title="The pattern that makes this scale">
        The agent does the <em>creative, one-time</em> work — understanding your
        attack surface and authoring rules and library approximations. The
        deterministic engine does the <em>repetitive, forever</em> work —
        replaying those rules on every commit. That division is the entire
        economic argument for OpenTaint.
      </Callout>

      {/* 10 */}
      <h2 id="ci">10. CI/CD integration</h2>
      <p>
        Because OpenTaint emits SARIF and ships a GitHub Action + GitLab template,
        wiring it into a pipeline is short. A minimal GitHub Actions job:
      </p>
      <CodeBlock
        lang="yaml"
        title=".github/workflows/opentaint.yml (illustrative)"
        code={`name: OpenTaint
on: [push, pull_request]

jobs:
  taint-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run OpenTaint
        run: |
          curl -fsSL https://opentaint.org/install.sh | bash
          opentaint scan
          cp "$(find ~/.opentaint/cache -name opentaint.sarif | head -1)" results.sarif
      - name: Upload SARIF to code scanning
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: results.sarif`}
      />
      <p>
        Now every pull request gets inline taint findings, and your once-authored
        rules guard the codebase on every commit — minutes of CPU, zero tokens.
        For the official, supported configuration always check the docs.
      </p>

      {/* 11 */}
      <h2 id="tips">11. Pro tips &amp; gotchas</h2>
      <ul>
        <li>
          <strong>Start with Java/Spring.</strong> It has the deepest coverage
          today; other languages are on the roadmap.
        </li>
        <li>
          <strong>Make sure the project builds.</strong> Inter-procedural
          accuracy depends on type and dependency resolution — a broken build
          means a shallower graph.
        </li>
        <li>
          <strong>Model your libraries.</strong> If taint "disappears" inside a
          third-party call, add a pass-through approximation so the engine knows
          data flows through it.
        </li>
        <li>
          <strong>Tune sanitizers to cut noise.</strong> Declaring your real
          encoders/validators as sanitizers removes false positives cleanly.
        </li>
        <li>
          <strong>Commit your rules.</strong> Treat custom rules as code — they
          are your team's accumulated security knowledge, replayable forever.
        </li>
        <li>
          <strong>Pin the Docker tag in CI</strong> for reproducible scans
          instead of <code>latest</code>.
        </li>
      </ul>

      <Callout type="danger" title="Use only on code you're authorized to test">
        Run OpenTaint against repositories you own or are explicitly authorized
        to assess. Treat any findings — and the proof-of-concept artifacts agents
        may generate — as sensitive, and never paste secrets, live credentials,
        or client data into rules or issues.
      </Callout>

      {/* 12 */}
      <h2 id="wrap">12. Wrap-up</h2>
      <p>
        OpenTaint reframes the AI-vs-static-analysis debate: instead of paying a
        language model to re-read your code on every scan, you pay it once to
        understand a vulnerability, capture that understanding as a deterministic
        taint rule, and let a fast engine enforce it forever. You get the depth
        of an inter-procedural agent at the cost of a static analyzer — open
        source, self-hostable, and batteries-included.
      </p>
      <p>Recap of the commands worth memorizing:</p>
      <CodeBlock
        lang="text"
        title="cheat sheet"
        code={`# install (pick one)
curl -fsSL https://opentaint.org/install.sh | bash
brew install --cask seqra/tap/opentaint
npm install -g @seqra/opentaint

# scan + view findings
opentaint scan                                  # compile + analyze, writes SARIF to ~/.opentaint/cache
opentaint summary <report.sarif> --show-findings
opentaint scan --rules ./rules .                # with custom rules

# docker (zero install)
docker run --rm -v $(pwd):/project \\
  ghcr.io/seqra/opentaint:latest \\
  opentaint scan /project

# AI agent skills
npx skills add https://github.com/seqra/opentaint`}
      />
      <p>
        Next steps: read the official{" "}
        <a href="https://github.com/seqra/opentaint" target="_blank" rel="noreferrer">
          OpenTaint repository
        </a>{" "}
        and documentation, run it on a real Spring app, and write your first
        custom rule. Then add it to your own AegisMind vault under{" "}
        <code>ai-security-tools/</code> so future-you can replay the workflow.
      </p>
    </article>
  );
}
