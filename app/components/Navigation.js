import Link from 'next/link';

export default function Navigation() {
    return (
        <nav>
            <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link href="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
}