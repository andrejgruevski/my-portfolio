import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index";

const App = () => (
    <MotionConfig reducedMotion="user">
        <Toaster />
        <Index />
    </MotionConfig>
);

export default App;
