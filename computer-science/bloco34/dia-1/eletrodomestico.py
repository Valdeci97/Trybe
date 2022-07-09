class Eletrodomestico:
    def __init__(self, cor, preco, marca, /):
        self.__cor = cor
        self.__preco = preco
        self.__marca = marca

    def get_cor(self):
        return self.__cor

    def set_cor(self, cor):
        self.__cor = cor

    def get_preco(self):
        return self.__preco

    def set_preco(self, preco):
        self.__preco = preco

    def get_marca(self):
        return self.__marca

    def set_marca(self, marca):
        self.__marca = marca
