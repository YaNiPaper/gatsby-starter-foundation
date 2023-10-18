export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Esta página ha sido actualizada. ` +
      `¿Quieres refrescar para ver la última versión?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
