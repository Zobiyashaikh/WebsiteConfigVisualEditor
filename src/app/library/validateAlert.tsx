// import React, { useState } from "react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Terminal } from "lucide-react";
// import {  validateConfig } from "@/app/library/validations";

// export default function App() {
//   const [alert, setAlert] = useState<{ title: string; description: string } | null>(null);

//   // setAlertHandler((title, description) => {
//   //   setAlert({ title, description });
//   //   setTimeout(() => setAlert(null), 3000); 
//   // });

//   const handleValidate = () => {
//     const config = {
//       appName: "",
//       version: "",
//       screens: [
//         {
//           id: "",
//           title: "",
//           sections: [{ id: "", title: "" }],
//         },
//       ],
//     };

//     validateConfig(config);
//   };

//   return (
//     <div className="p-4">
//       {alert && (
//         <Alert className="bg-red-100 text-red-700 border-l-4 border-red-500 mb-4">
//           <Terminal className="h-4 w-4" />
//           <AlertTitle>{alert.title}</AlertTitle>
//           <AlertDescription>{alert.description}</AlertDescription>
//         </Alert>
//       )}
//       <button
//         onClick={handleValidate}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Validate Config
//       </button>
//     </div>
//   );
// }
