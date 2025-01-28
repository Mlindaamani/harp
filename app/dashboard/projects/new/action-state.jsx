// import React from "react";
// import { testActionState } from "@/app/actions/project";
// import { useActionState } from "react";
// import { useState } from "react";

// import { filteredProjects } from "@/app/lib/utils/functions";

// const searchTerm = "EDEDJH";
// const projects = [
//   { name: "Police-smoke-system", status: "done" },
//   { name: "AvR", status: "yet" },
//   { name: "Bus-stop", status: "done" },
//   { name: "Gas-detectors", status: "yet" },
// ];

// console.log(filteredProjects(searchTerm, projects));

// const initialState = {
//   message: "",
//   errors: {},
// };

// const intialUserFormData = {
//   name: "",
//   email: "",
//   phone: "",
// };

// const RealEstate = () => {
//   const [formData, setFormData] = useState(intialUserFormData);

//   const [state, formAction, isPending] = useActionState(
//     testActionState,
//     initialState
//   );

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="bg-success-subtle p-5 rounded-4">
//       {state.project ? (
//         <h4 className="text-center m-3 text-success">
//           ✅ Successfully created {state.project}
//         </h4>
//       ) : (
//         <h4 className="text-center m-3 text-white">Nice As Fuck!</h4>
//       )}

//       <form action={formAction} autoComplete="off">
//         <div className="mb3">
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-control p-2"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {state.errors.name && (
//             <p className="text-danger">{state.errors.name}</p>
//           )}
//         </div>

//         <div className="mb3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="form-control p-2"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {state.errors.email && (
//             <p className="text-danger">{state.errors.email}</p>
//           )}
//         </div>

//         <div className="mb3">
//           <label htmlFor="phone" className="form-label">
//             Phone
//           </label>
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             className="form-control p-2"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           {state.errors.phone && (
//             <p className="text-danger">{state.errors.phone}</p>
//           )}
//         </div>

//         <div className="mb3">
//           <button className="btn btn-primary w-100 mt-5" disabled={isPending}>
//             {isPending ? "Saving..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RealEstate;
