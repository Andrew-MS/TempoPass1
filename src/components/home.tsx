import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-6">Doggy Daycare Check-in</h1>
      <div className="max-w-4xl mx-auto bg-card p-6 rounded-lg shadow-lg">
        <p className="text-xl mb-4">
          Welcome to our pet daycare management system!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="p-4 border rounded-md bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">For Staff</h2>
            <p className="text-muted-foreground mb-4">
              Manage pet records and daycare operations
            </p>
          </div>
          <div
            onClick={() => navigate("/customer/login")}
            className="p-4 border rounded-md bg-muted/50 cursor-pointer hover:bg-muted transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">For Customers</h2>
            <p className="text-muted-foreground mb-4">
              Check in your pets and view your passes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
