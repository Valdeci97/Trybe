from eletrodomestico import Eletrodomestico


class TV(Eletrodomestico):
    def __init__(
      self,
      cor: str,
      preco: int,
      marca: str,
      /,
      modelo: str,
      tamanho: str,
      volume_max: int,
      canais: list):
        super().__init__(cor, preco, marca)
        self.__modelo: str = modelo
        self.__tamanho: str = tamanho
        self.__volume_max: int = volume_max
        self.__canais: list = canais
        self.__ligada: bool = False
        self.__volume: int = 0
        self.__canal_atual: int = 5

    def ligar(self):
        self.__ligada = True

    def desligar(self):
        self.__ligada = False

    def diminuir_volume(self, volume):
        if (self.__volume - volume < 0):
            self.__volume = 0
        else:
            self.__volume -= volume

    def aumentar_volume(self, volume):
        if (self.__volume + volume > self.__volume_max):
            self.__volume = self.__volume_max
        else:
            self.__volume += volume

    def modificar_canal(self, canal):
        self.__canal_atual = canal

    def get_estado(self):
        return self.__ligada

    def get_canal_atual(self):
        return self.__canal_atual

    def get_modelo(self):
        return self.__modelo

    def get_tamanho(self):
        return self.__tamanho


tv_azul = TV(
  'Azul',
  1700,
  'Samsung',
  'SmartTV series expression',
  '42"',
  100,
  [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 15])

tv_azul.ligar()
print(tv_azul.get_estado())
print(tv_azul.get_canal_atual())
print(tv_azul.get_modelo())
print(tv_azul.get_marca())
tv_azul.modificar_canal(22)
print(tv_azul.get_canal_atual())
