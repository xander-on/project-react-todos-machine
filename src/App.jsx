import { ThemeProvider } from "./theme/context/";
import { TodosScreen } from "./todos/screens/TodosScreen";
import { TodosProvider } from "./todos/context";
import { ThemeButton } from "./theme/components/";
import { CoverScreen } from "./ui";



export const App = () => {
    return (
        <ThemeProvider>
            <TodosProvider >
                <CoverScreen />
                <ThemeButton />
                <TodosScreen />
            </TodosProvider>
        </ThemeProvider>
    );
}

