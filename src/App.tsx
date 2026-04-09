import { Button } from "./components/ui/Button";
import './App.scss';
import { CheckIcon, GearSixIcon, SlidersHorizontalIcon, TrashIcon } from "@phosphor-icons/react";

function App() {
    return (
        <div className="container">
            <div className="row">
                <Button size="m" variant="primary" leading_icon={true} trailing_icon={false} badge={false} 
                    badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="m" variant="secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="m" variant="destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="secondary" icon={<TrashIcon />} aria_label="button" />
            </div>
            <div className="row">
                <Button size="s" variant="primary" leading_icon={true} trailing_icon={false} badge={false} 
                badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="s" variant="secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="s" variant="destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="secondary" icon={<TrashIcon />} aria_label="button" />
            </div>
            <div className="row">
                <Button size="xs" variant="primary" leading_icon={true} trailing_icon={false} badge={false} 
                badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Valider
                </Button>
                <Button size="xs" variant="secondary" leading_icon={true} trailing_icon={false} badge={true} 
                badge_list="3" icon={<SlidersHorizontalIcon />} disabled={false}>
                    Filtrer
                </Button>
                <Button size="xs" variant="destructive" leading_icon={false} trailing_icon={false} badge={false} 
                badge_list="3" icon={<GearSixIcon />} disabled={false}>
                    Supprimer
                </Button>
                <Button variant="secondary" icon={<TrashIcon />} aria_label="button" />
            </div>
            <div className="row">
                <Button size="m" variant="ghost" leading_icon={true} trailing_icon={false} badge={false} 
                badge_list="3" icon={<CheckIcon />} disabled={false}>
                    Ghost
                </Button>
                <Button variant="alpha-dark" icon={<CheckIcon />} disabled={false} aria_label="button" />
                <Button variant="alpha-light" icon={<CheckIcon />} disabled={false} aria_label="button" />
            </div>
        </div>
    )
}

export default App;