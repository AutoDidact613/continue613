// /**
//  * This is the entry point for the extension.
//  */

// import { setupCa } from "core/util/ca";
// import { extractMinimalStackTraceInfo } from "core/util/extractMinimalStackTraceInfo";
// import { Telemetry } from "core/util/posthog";
// import * as vscode from "vscode";

// import { getExtensionVersion } from "./util/util";
// export { default as buildTimestamp } from "./.buildTimestamp";

// async function dynamicImportAndActivate(context: vscode.ExtensionContext) {
//   await setupCa();
//   const { activateExtension } = await import("./activation/activate");
//   return await activateExtension(context);
// }


// export function activate(context: vscode.ExtensionContext) {
//   return dynamicImportAndActivate(context).catch((e) => {
//     console.log("Error activating extension: ", e);
//     Telemetry.capture(
//       "vscode_extension_activation_error",
//       {
//         stack: extractMinimalStackTraceInfo(e.stack),
//         message: e.message,
//       },
//       false,
//       true,
//     );
//     vscode.window
//       .showWarningMessage(
//         "Error activating the Continue extension.",
//         "View Logs",
//         "Retry",
//       )
//       .then((selection) => {
//         if (selection === "View Logs") {
//           vscode.commands.executeCommand("continue613.viewLogs");
//         } else if (selection === "Retry") {
//           // Reload VS Code window
//           vscode.commands.executeCommand("workbench.action.reloadWindow");
//         }
//       });
//   });
// }

// export function deactivate() {
//   Telemetry.capture(
//     "deactivate",
//     {
//       extensionVersion: getExtensionVersion(),
//     },
//     true,
//   );

//   Telemetry.shutdownPosthogClient();
// }

/**
 * This is the entry point for the extension.
 */

import { setupCa } from "core/util/ca";
import { extractMinimalStackTraceInfo } from "core/util/extractMinimalStackTraceInfo";
import { Telemetry } from "core/util/posthog";
import * as vscode from "vscode";

import { getExtensionVersion } from "./util/util";
export { default as buildTimestamp } from "./.buildTimestamp";

async function dynamicImportAndActivate(context: vscode.ExtensionContext) {
  await setupCa();
  const { activateExtension } = await import("./activation/activate");
  return await activateExtension(context);
}

// ✨ תוספת חדשה: פונקציה להצגת Alert
function showWelcomeAlert(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'welcomeAlert',
    'ברוכים הבאים לתוסף',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true
    }
  );

  panel.webview.html = getWelcomeAlertHtml();
}

// ✨ תוספת חדשה: HTML עבור ה-Alert
function getWelcomeAlertHtml(): string {
  return `
    <!DOCTYPE html>
    <html lang="he">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ברוכים הבאים לתוסף</title>
        <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #1e1e1e;
                color: #cccccc;
                direction: rtl;
                overflow: hidden;
            }
            #root {
                width: 100vw;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        
        <script type="text/babel">
            const { useState, useEffect } = React;

            const AlertUsing = () => {
                const [display, setDisplay] = useState(true);

                const closeAlert = () => {
                    setDisplay(false);
                    // שליחת הודעה ל-VS Code לסגירת הפאנל
                    if (window.acquireVsCodeApi) {
                        const vscode = window.acquireVsCodeApi();
                        vscode.postMessage({ command: 'closePanel' });
                    }
                };

                if (!display) return null;

                return (
                    <div 
                        style={{
                            position: 'fixed',
                            inset: 0,
                            padding: '16px',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}
                    >
                        <div 
                            style={{
                                width: '100%',
                                height: '100%',
                                padding: '24px',
                                position: 'relative',
                                overflowY: 'auto',
                                backgroundColor: '#1e1e1e',
                                border: '1px solid #3c3c3c',
                                borderRadius: '8px',
                                color: '#cccccc',
                                direction: 'rtl',
                                maxHeight: '100vh'
                            }}
                        >
                            <button
                                onClick={closeAlert}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent',
                                    color: '#cccccc',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '18px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#3c3c3c';
                                    e.target.style.color = '#ffffff';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#cccccc';
                                }}
                            >
                                ✕
                            </button>

                            <h1 
                                style={{ 
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    marginBottom: '32px',
                                    textAlign: 'center',
                                    color: '#569cd6',
                                    marginTop: '8px',
                                    backgroundColor: '#1e1e1e',
                                    borderBottom: '1px solid #3c3c3c',
                                    position: 'sticky',
                                    top: 0,
                                    paddingBottom: '16px',
                                    paddingTop: '16px'
                                }}
                            >
                                ברוכים הבאים לתוסף!
                            </h1>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.125rem', lineHeight: '1.6', paddingBottom: '32px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: '8px', backgroundColor: '#252526' }}>
                                    <span style={{ color: '#dcdcaa', fontSize: '1.5em' }}>✨</span>
                                    <span>התוסף נוצר כדי לסייע למתכנתות המבקשות סינון מקצועי ונוח.</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: '8px', backgroundColor: '#252526' }}>
                                    <span style={{ color: '#dcdcaa', fontSize: '1.5em' }}>👩‍💻</span>
                                    <span>
                                        פותח על ידי{' '}
                                        <strong style={{ color: '#4fc1ff' }}>AVIGAIL BERK</strong>
                                        {' '}ו־{' '}
                                        <strong style={{ color: '#4fc1ff' }}>SH. TEPP</strong>.
                                    </span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: '8px', backgroundColor: '#252526' }}>
                                    <span style={{ color: '#dcdcaa', fontSize: '1.5em' }}>📩</span>
                                    <div>
                                        <div style={{ marginBottom: '8px', fontWeight: '600', color: '#dcdcaa' }}>
                                            פניות ודיווח על באגים:
                                        </div>
                                        <a
                                            href="mailto:sh0504128171@gmail.com"
                                            style={{ 
                                                color: '#4fc1ff', 
                                                textDecoration: 'underline',
                                                fontSize: '1.125rem'
                                            }}
                                        >
                                            sh0504128171@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderRadius: '8px', backgroundColor: '#252526' }}>
                                    <span style={{ color: '#dcdcaa', fontSize: '1.5em' }}>🛒</span>
                                    <div>
                                        <div style={{ marginBottom: '8px', fontWeight: '600', color: '#dcdcaa' }}>
                                            להזמנת מוצרים מבוססי AI מותאמים אישית:
                                        </div>
                                        <a
                                            href="mailto:abigail506040@gmail.com"
                                            style={{ 
                                                color: '#4fc1ff', 
                                                textDecoration: 'underline',
                                                fontSize: '1.125rem'
                                            }}
                                        >
                                            אביגיל ברק - abigail506040@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div 
                                    style={{
                                        padding: '24px',
                                        borderRadius: '8px',
                                        fontSize: '1.125rem',
                                        backgroundColor: '#2d2d30',
                                        borderRight: '4px solid #f9c23c',
                                        color: '#f9c23c',
                                        marginTop: '32px'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ fontSize: '1.5em' }}>⚠️</span>
                                        <div>
                                            <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1.25rem' }}>שימו לב:</div>
                                            <div style={{ lineHeight: '1.6' }}>
                                                לשימוש בתוסף יש ליצור חשבון במודל AI (כמו OpenAI וכו').
                                                <br />
                                                מומלץ לעקוב אחר עלויות השימוש בתחילת הדרך.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            };

            ReactDOM.render(<AlertUsing />, document.getElementById('root'));
        </script>
    </body>
    </html>
  `;
}

export function activate(context: vscode.ExtensionContext) {
  // ✨ תוספת חדשה: רישום הפקודה להצגת Alert
  const showAlertDisposable = vscode.commands.registerCommand(
    'continue613.showWelcomeAlert',
    () => {
      showWelcomeAlert(context);
    }
  );
  
  context.subscriptions.push(showAlertDisposable);

  return dynamicImportAndActivate(context).catch((e) => {
    console.log("Error activating extension: ", e);
    Telemetry.capture(
      "vscode_extension_activation_error",
      {
        stack: extractMinimalStackTraceInfo(e.stack),
        message: e.message,
      },
      false,
      true,
    );
    vscode.window
      .showWarningMessage(
        "Error activating the Continue extension.",
        "View Logs",
        "Retry",
      )
      .then((selection) => {
        if (selection === "View Logs") {
          vscode.commands.executeCommand("continue613.viewLogs");
        } else if (selection === "Retry") {
          // Reload VS Code window
          vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  });
}

export function deactivate() {
  Telemetry.capture(
    "deactivate",
    {
      extensionVersion: getExtensionVersion(),
    },
    true,
  );

  Telemetry.shutdownPosthogClient();
}