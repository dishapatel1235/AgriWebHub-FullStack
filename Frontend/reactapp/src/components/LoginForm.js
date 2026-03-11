import { getAuth, signInWithPopup } from 'firebase/auth'; // Import Firebase Auth methods
import { googleProvider } from '../firebase'; // Assuming googleProvider is exported from your Firebase config

function LoginForm() {
    // Initialize Firebase Auth
    const auth = getAuth();

    const handleGoogleLogin = () => {
      signInWithPopup(auth, googleProvider) // Use the signInWithPopup from Firebase v9+
        .then(result => {
          console.log("Logged in as:", result.user);
        })
        .catch(error => {
          console.error("Google login failed:", error);
        });
    };
  
    return (
      <div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-900">Email</label>
            <input type="email" className="w-full px-2 py-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Username</label>
            <input type="text" className="w-full px-2 py-1 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-900">Password</label>
            <input type="password" className="w-full px-2 py-1 border rounded-md" />
          </div>
          <button className="w-full py-2 bg-green-500 text-white rounded-md">Login</button>
          <div className="mt-4">
            <button 
              type="button" 
              onClick={handleGoogleLogin} 
              className="w-full bg-red-500 text-white py-2 rounded-md"
            >
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;
