import LoginForm from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Page = () => {
  return (
    <main className="flex items-center bg-[url('/bg-form.jpg')] bg-cover justify-center min-h-screen">
      <Card className="w-96 bg-slate-700/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="px-4 py-4">
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
