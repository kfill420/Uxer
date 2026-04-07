import { Button } from "./components/ui/Button";
import './App.scss';
import { CheckIcon, GearSixIcon, SlidersHorizontalIcon, TrashIcon } from "@phosphor-icons/react";

function App() {
    return (
        <div className="container">
            <Button size="M" variant="Primary" state="Default" leading_icon={true} trailing_icon={false} badge={true} badge_list="3" icon={<CheckIcon />}>Valider</Button>
            <Button size="M" variant="Secondary" state="Default" leading_icon={true} trailing_icon={false} badge={true} badge_list="3" icon={<SlidersHorizontalIcon />}>Filtrer</Button>
            <Button size="M" variant="Destructive" state="Default" leading_icon={false} trailing_icon={false} badge={true} badge_list="3" icon={<GearSixIcon />}>Supprimer</Button>
            <Button variant="Secondary" state="Default" icon={<TrashIcon />}></Button>
        </div>
    )
}

export default App;