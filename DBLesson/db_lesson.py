import sqlite3
import pandas as pd

# データベース接続
db_name     = "sqlite-sakila.db"
connection  = sqlite3.connect(db_name)

# SQL分を引数に渡すと、Pandas.DataFrameを返す関数
def sql_operation(sql_query):
    # SQL文とDBのConnectionをもとにDataFrame作成
    df = pd.read_sql(sql_query, connection)
    # 出力
    return df

# SQL文
query = '''
    SELECT * -- すべての列を指定
    FROM customer -- テーブルを指定
'''

# 関数実行
sql_operation(query)