import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DragAndDrop from "../pages/DragAndDrop";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DragAndDrop />
    </QueryClientProvider>
  );
}
