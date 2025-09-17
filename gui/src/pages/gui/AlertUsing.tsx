// import { useEffect, useState } from "react";

// const AlertUsing = () => {
//     const [display, setDisplay] = useState(false);

//     useEffect(() => {
//         if (!localStorage.getItem("alertUsing")) {
//             setDisplay(true);
//             localStorage.setItem("alertUsing", "true");
//         }
//     }, []);

//     return (
//         <>
//             {display ? (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//                     <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative text-gray-800">
//                         {/* כפתור סגירה */}
//                         <button
//                             onClick={() => setDisplay(false)}
//                             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
//                         >
//                             ✕
//                         </button>

//                         <h1 className="text-2xl font-bold mb-6 text-center">
//                             ברוכים הבאים לתוסף!
//                         </h1>

//                         <ul className="space-y-4 text-lg leading-relaxed">
//                             <li>✨ התוסף נוצר כדי לסייע למתכנתות המבקשות סינון מקצועי ונוח.</li>
//                             <li>👩‍💻 פותח על ידי <b>AVIGAIL BERK</b> ו־<b>SH. TEPP</b>.</li>
//                             <li>
//                                 📩 פניות ודיווח על באגים ניתן לשלוח לכתובת:{" "}
//                                 <a
//                                     href="mailto:sh0504128171@gmail.com"
//                                     className="text-blue-600 underline"
//                                 >
//                                     sh0504128171@gmail.com
//                                 </a>
//                             </li>
//                             <li>
//                                 🛒 להזמנת מוצרים מבוססי AI מותאמים אישית, ניתן לפנות ל־{" "}
//                                 <a
//                                     href="mailto:abigail506040@gmail.com"
//                                     className="text-blue-600 underline"
//                                 >
//                                     אביגיל ברק - abigail506040@gmail.com
//                                 </a>
//                             </li>
//                         </ul>

//                         <div className="mt-8 p-4 border border-yellow-400 bg-yellow-100 rounded-lg text-yellow-800 text-sm">
//                             ⚠️ שימו לב: לשימוש בתוסף יש ליצור חשבון במודל AI (כמו OpenAI וכו.).
//                             מומלץ לעקוב אחר עלויות השימוש בתחילת הדרך.
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <button
//                     onClick={() => setDisplay(true)}
//                     className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
//                 >
//                     הצג מידע על התוסף
//                 </button>
//             )}
//         </>
//     );
// };

// export default AlertUsing;


import { useEffect, useState } from "react";

const AlertUsing = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        // Note: localStorage not available in this environment
        // In VS Code extension, this would work normally
        setDisplay(true); // Always show for demo
    }, []);

    return (
        <>
            {display ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                >
                    <div
                        className="rounded-lg shadow-2xl max-w-2xl w-full p-6 relative"
                        style={{
                            backgroundColor: '#1e1e1e',
                            border: '1px solid #3c3c3c',
                            color: '#cccccc',
                            direction: 'rtl'
                        }}
                    >
                        {/* כפתור סגירה */}
                        <button
                            onClick={() => setDisplay(false)}
                            className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
                            style={{
                                color: '#cccccc',
                                backgroundColor: 'transparent'
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
                            className="text-2xl font-bold mb-6 text-center"
                            style={{ color: '#569cd6', marginTop: '8px' }}
                        >
                            ברוכים הבאים לתוסף!
                        </h1>

                        <div className="space-y-5 text-base leading-relaxed">
                            <div
                                className="flex items-start gap-3 p-3 rounded-md"
                                style={{ backgroundColor: '#252526' }}
                            >
                                <span style={{ color: '#dcdcaa', fontSize: '1.1em' }}>✨</span>
                                <span>התוסף נוצר כדי לסייע למתכנתות המבקשות סינון מקצועי ונוח.</span>
                            </div>

                            <div
                                className="flex items-start gap-3 p-3 rounded-md"
                                style={{ backgroundColor: '#252526' }}
                            >
                                <span style={{ color: '#dcdcaa', fontSize: '1.1em' }}>👩‍💻</span>
                                <span>
                                    פותח על ידי{' '}
                                    <strong style={{ color: '#4fc1ff' }}>AVIGAIL BERK</strong>
                                    {' '}ו־{' '}
                                    <strong style={{ color: '#4fc1ff' }}>SH. TEPP</strong>.
                                </span>
                            </div>

                            <div
                                className="flex items-start gap-3 p-3 rounded-md"
                                style={{ backgroundColor: '#252526' }}
                            >
                                <span style={{ color: '#dcdcaa', fontSize: '1.1em' }}>📩</span>
                                <span>
                                    פניות ודיווח על באגים ניתן לשלוח לכתובת:{' '}
                                    <a
                                        href="mailto:sh0504128171@gmail.com"
                                        className="transition-colors duration-200"
                                        style={{ color: '#4fc1ff', textDecoration: 'underline' }}
                                        onMouseEnter={(e) => e.target.style.color = '#569cd6'}
                                        onMouseLeave={(e) => e.target.style.color = '#4fc1ff'}
                                    >
                                        sh0504128171@gmail.com
                                    </a>
                                </span>
                            </div>

                            <div
                                className="flex items-start gap-3 p-3 rounded-md"
                                style={{ backgroundColor: '#252526' }}
                            >
                                <span style={{ color: '#dcdcaa', fontSize: '1.1em' }}>🛒</span>
                                <span>
                                    להזמנת מוצרים מבוססי AI מותאמים אישית, ניתן לפנות ל־{' '}
                                    <a
                                        href="mailto:abigail506040@gmail.com"
                                        className="transition-colors duration-200"
                                        style={{ color: '#4fc1ff', textDecoration: 'underline' }}
                                        onMouseEnter={(e) => e.target.style.color = '#569cd6'}
                                        onMouseLeave={(e) => e.target.style.color = '#4fc1ff'}
                                    >
                                        אביגיל ברק - abigail506040@gmail.com
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div
                            className="mt-6 p-4 rounded-lg text-sm border-r-4"
                            style={{
                                backgroundColor: '#2d2d30',
                                borderRightColor: '#f9c23c',
                                borderLeft: 'none',
                                color: '#f9c23c'
                            }}
                        >
                            <div className="flex items-start gap-2">
                                <span style={{ fontSize: '1.1em' }}>⚠️</span>
                                <span>
                                    <strong>שימו לב:</strong> לשימוש בתוסף יש ליצור חשבון במודל AI (כמו OpenAI וכו').
                                    מומלץ לעקוב אחר עלויות השימוש בתחילת הדרך.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<></>
                // <button
                //     onClick={() => setDisplay(true)}
                //     className="fixed bottom-4 left-4 z-50 px-4 py-2 rounded-lg shadow-lg transition-all duration-200 font-medium"
                //     style={{
                //         backgroundColor: '#007acc',
                //         color: '#ffffff',
                //         border: 'none',
                //         direction: 'rtl'
                //     }}
                //     onMouseEnter={(e) => {
                //         e.target.style.backgroundColor = '#005a9e';
                //         e.target.style.transform = 'translateY(-1px)';
                //         e.target.style.boxShadow = '0 8px 25px rgba(0, 122, 204, 0.3)';
                //     }}
                //     onMouseLeave={(e) => {
                //         e.target.style.backgroundColor = '#007acc';
                //         e.target.style.transform = 'translateY(0)';
                //         e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                //     }}
                // >
                //     הצג מידע על התוסף
                // </button>
            )}
        </>
    );
};

export default AlertUsing;