/**
 * IonIcon
 * Wrapper sobre o web component <ion-icon> do Ionicons.
 *
 * Uso:
 *   <IonIcon name="shield-checkmark" />
 *   <IonIcon name="shield-checkmark-outline" size="large" />
 *   <IonIcon name="call" className={styles.icon} />
 *
 * Todos os nomes em: https://ionic.io/ionicons
 */
export default function IonIcon({ name, size, className, style, 'aria-hidden': ariaHidden = true }) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <ion-icon
      name={name}
      size={size}
      class={className}
      style={style}
      aria-hidden={ariaHidden ? 'true' : undefined}
    />
  );
}
