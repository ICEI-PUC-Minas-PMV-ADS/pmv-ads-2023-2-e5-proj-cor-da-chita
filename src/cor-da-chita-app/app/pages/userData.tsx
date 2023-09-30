// // Dados do usuário na tela na finalização da compra
// "use client";
// import React, { useState } from "react";
// import { useSession } from "next-auth/react";

// import Form from "../components/Form";
// import SignInButton from "../components/SignInButton";
// import { Button } from "@nextui-org/react";
// import { MailIcon } from "../icons/MailIcon";
// import { UserIcon } from "../icons/UserIcon";
// import InputField from "../components/Input";

// const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const newValue = event.target.value;

//   return newValue;
// };

// export default function UserData(props: any) {
//   const { data: session } = useSession();

//   const [nome, setNome] = useState<string>();
//   const [email, setEmail] = useState<string>();
//   const [telefone, setTelefone] = useState<string>();

//   return (
//     <>
//       <h2>Seus Dados</h2>
//       <div className="bg-sky-950">
//         <Form method="post">
//           <InputField
//             type="text"
//             label="Nome"
//             size="sm"
//             value={nome}
//             //onChange={(e) => setNome(e.target.value)}
//             onChange={handleChangeEvent}
//             startContent={
//               <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//             }
//           />
//           <InputField
//             type="email"
//             label="Email"
//             size="sm"
//             value={email}
//             //onChange={(e) => setEmail(e.target.value)}
//             onChange={handleChangeEvent}
//             startContent={
//               <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//             }
//           />
//           <InputField
//             type="tel"
//             label="Telefone"
//             size="sm"
//             value={telefone}
//             //onChange={(e) => setTelefone(e.target.value)}
//             onChange={handleChangeEvent}
//           />
//           <Button color="success" size="md" onClick={(e) => {}}>
//             Confirmar Dados
//           </Button>
//         </Form>
//       </div>
//       {session && session.user ? (
//         <></>
//       ) : (
//         <div>
//           <p>________________ ou ________________</p>
//           <SignInButton size="md" text="continuar com Google" />
//         </div>
//       )}

//       <div>{nome}</div>
//     </>
//   );
// }
