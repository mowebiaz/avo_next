import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <p>Vous semblez perdu</p>
      <p>
        Retourner à l&apos;
        <Link href="/">accueil</Link>
      </p>
    </main>
  )
}