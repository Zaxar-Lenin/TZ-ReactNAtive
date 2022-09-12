export const getImage = (name: string) => {
  const icons: any = {
    EMBARGOCoctailBar: require('@/assets/images/png/EMBARGOCoctailBar.png'),
    Mint: require('@/assets/images/png/Mint.png'),
    SpiritBar: require('@/assets/images/png/SpiritBar.png'),
    Dominos: require('@/assets/images/png/Dominos.png'),
    EVO: require('@/assets/images/png/EVOWellnessClub.png'),
    Voka: require('@/assets/images/png/Voka.png'),
    ODIN: require('@/assets/images/png/Odin.png'),
    Skyeng: require('@/assets/images/png/Skyeng.png'),
    Robolab: require('@/assets/images/png/Robolab.png'),
    FASOL: require('@/assets/images/png/Fasol.png'),
    OnlineClass: require('@/assets/images/png/OnlineClass.png'),
  }

  return icons[name]
}
