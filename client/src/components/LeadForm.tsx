/**
 * LeadForm.tsx — LeadConnector (GoHighLevel) embedded website form.
 * Single source of truth for the lead-capture form used across the site.
 * The form_embed.js loader is included globally in client/index.html, which
 * initializes and auto-resizes the iframe.
 */

interface LeadFormProps {
  /** Fallback iframe height in px before form_embed.js auto-resizes. */
  height?: number;
  style?: React.CSSProperties;
}

const FORM_ID = "BE2emhMRiJKlZ92V3FSv";

export default function LeadForm({ height = 542, style }: LeadFormProps) {
  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "none",
        borderRadius: "10px",
        ...style,
      }}
      id={`inline-${FORM_ID}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form (Vital Accounting & Tax Services LLC)"
      data-height={String(height)}
      data-layout-iframe-id={`inline-${FORM_ID}`}
      data-form-id={FORM_ID}
      title="Website Form (Vital Accounting & Tax Services LLC)"
    />
  );
}
