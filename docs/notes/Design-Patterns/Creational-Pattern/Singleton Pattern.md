# Singleton
确保一个类在整个应用的生命周期内只实例化一次，例如数据库链接或日志服务

## 单例模式的优势
1. **单个实例**：确保该类在整个生命周期中只创建一个实例，防止多个实例引起冲突或消耗不必要的资源
2. **全局访问**：提供该类实例的全局访问点，能够在不同的模块之间共享数据或功能
3. **资源管理**：更好地管理共享资源，如数据库连接，无需创建多个连接使系统不堪重负
4. **延迟初始化**：仅在需要时创建实例

## 实现单例模式
在Python中，单例模式实现方式与”四人帮“最初的设想不同，原始的单例类禁止常规实例化，提供了一个返回单例实例的静态类方法

在Python中，可以使用自定义的\_\_new__方法进行实例化，以获取单例实例

### 基础类实现
```python
class Singleton:
	_instance = None    # 用于存放唯一实例

	def __new__(cls):    # cls 表示类本身，用于访问类变量
		if cls._instance is None:
			cls._instance = super().__new__(cls)    # 调用object来分配内存创建实例对象
		return cls._instance
```

在此示例中重写了\_\_new__方法。如果该实例不存在，则创建一个新的实例，否则返回现有实例

### 元类实现
**元类（MetaClass）** 是Python中一个用来创建类的类。以下代码中SingletonMeta类负责管理实例，确保每一个类只有一个实例，\_\_call__方法负责控制类的实例化，根据需要创建和存储实例。通过SingletonMeta元类应用于Singleton类，可以轻松的执行单例模式，使Singleton类能够更专注业务逻辑
```python
class SingletonMeta(type):    # 类本身是由type创建的
	_instances = {}

	def __call__(cls, *args, **kwargs):
		if cls not in cls._instances:
			instance = super().__call__(*args, **kwargs)
			cls._instances[cls] = instance
		return cls._instances[cls]

class Singleton(metaclass=SingletonMeta):
	pass
```

