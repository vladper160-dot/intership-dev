import { SecbarSelect } from './SecbarSelect';
import './secbar.css';



export function SecbarActions() {
    return (
        <section className="secbar-actions">
            <button className="secbar-add-btn">+</button>
            <button className="secbar-filter-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filtrování</span>
            </button>
        </section>
    );
}

export function SecbarFilters(){
    return (
        <section id="secbar">
            <span className="secbar-top-info">Seřadit dle: Hodnota dealu (sestupně)</span>
            <h1>Žebříček obchodníků</h1>
            
            <div className="secbar-filters">
                <SecbarSelect label="Mé filtry" />
                <SecbarSelect label="Tento měsíc" isActive />
                <SecbarSelect label="Obchodník" />
                <SecbarSelect label="Region" />
                <SecbarSelect label="Tým" />
                <button className="secbar-icon-btn">✏️</button>
            </div>

            <div className="secbar-active-tags">
                <span className="secbar-badge">Filtrováno</span>
                <div className="secbar-tag">
                    <span>Tento měsíc: Máj 2026</span>
                    <button className="secbar-tag-close">×</button>
                </div>
                <button className="secbar-clear-all">× Vyčistit filtry</button>
            </div>
        </section>
    );
}




export function Secbar() {
    return (
        <section id="secbar_main">
            <SecbarFilters />
            <SecbarActions />
        </section>
    );
}