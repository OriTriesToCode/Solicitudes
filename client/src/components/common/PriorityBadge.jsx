const CONFIG = {
    high:   { label: 'Alta',   className: 'high'   },
    medium: { label: 'Media',  className: 'medium' },
    low:    { label: 'Baja',   className: 'low'    },
  }
  
  export default function PriorityBadge({ priority }) {
    const cfg = CONFIG[priority] ?? { label: '—', className: 'none' }
    return (
      <span className={`badge priority-badge ${cfg.className}`}>
        <span className="dot" />
        {cfg.label}
      </span>
    )
  }