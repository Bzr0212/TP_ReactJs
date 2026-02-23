export default function WelcomeModal({ onPickBackground, onSkip }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true">
      <div className="modal">
        <h2>Bienvenue</h2>
        <p className="modal-text">
          Pour commencer, choisis une image qui te motive. Elle s’affichera en fond pendant que tu notes tes objectifs.
        </p>

        <div className="modal-actions">
          <label className="file-button">
            Mettre un fond d’écran
            <input type="file" accept="image/*" onChange={onPickBackground} hidden />
          </label>

          <button type="button" className="secondary" onClick={onSkip}>
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}