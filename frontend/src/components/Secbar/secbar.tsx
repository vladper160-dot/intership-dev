import './secbar.css';

export function Secbar() {
    return (
        <section id="secbar">
            <span className="secbar-top-info">Seřadit dle: Hodnota dealu (sestupně)</span>
            <h1>Žebříček obchodníků</h1>
            
            <div className="secbar-filters">
                <select className="secbar-select">
                    <option>Mé filtry</option>
                </select>
                <select className="secbar-select active">
                    <option>Tento měsíc</option>
                </select>
                <select className="secbar-select">
                    <option>Obchodník</option>
                </select>
                <select className="secbar-select">
                    <option>Region</option>
                </select>
                <select className="secbar-select">
                    <option>Tým</option>
                </select>
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