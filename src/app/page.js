import { MainPage } from "@/pages/MainPage";
import styles from "./page.module.css";

const data = [
  { nombre: 'Dario', edad: 22 },
  { nombre: 'Juan', edad: 14 },
  { nombre: 'Carolina', edad: 11 },
  { nombre: 'Carlos', edad: 29 },
  { nombre: 'Esteban', edad: 42 },
  { nombre: 'Laura', edad: 34 },
  { nombre: 'Sofia', edad: 48 },
  { nombre: 'Pablo', edad: 10 },
  { nombre: 'Jose', edad: 2 },
  { nombre: 'Luisa', edad: 55 },
];

export default function Home() {
  return (
    <MainPage data={data} className={styles.page}>
    </MainPage>
  );
}
