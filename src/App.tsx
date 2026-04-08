import { Button } from "./components/ui/Button";
import './App.scss';
import { CheckIcon, GearSixIcon, SlidersHorizontalIcon, TrashIcon } from "@phosphor-icons/react";

function App() {
    return (
        <div className="container">
            <div className="row">
                <Button size="M" variant="Primary" leading_icon={true} trailing_icon={false} badge={false} 
                    badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="M" variant="Secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="M" variant="Destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="Secondary" icon={<TrashIcon />}></Button>
            </div>
            <div className="row">
                <Button size="S" variant="Primary" leading_icon={true} trailing_icon={false} badge={false} 
                badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="S" variant="Secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="S" variant="Destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="Secondary" icon={<TrashIcon />}></Button>
            </div>
            <div className="row">
                <Button size="XS" variant="Primary" leading_icon={true} trailing_icon={false} badge={false} 
                badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="XS" variant="Secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="XS" variant="Destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="Secondary" icon={<TrashIcon />}></Button>
            </div>
        </div>
    )
}

export default App;