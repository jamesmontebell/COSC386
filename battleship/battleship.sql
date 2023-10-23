Q1

mysql> SELECT name,displacement from Ships, Classes where Ships.class = Classes.class AND Classes.displacement > 35000
    -> ;
+----------------+--------------+
| name           | displacement |
+----------------+--------------+
| Iowa           |        46000 |
| Missouri       |        46000 |
| Musashi        |        65000 |
| New Jersey     |        46000 |
| North Carolina |        37000 |
| Washington     |        37000 |
| Wisconsin      |        46000 |
| Yamato         |        65000 |
+----------------+--------------+
8 rows in set (0.00 sec)

Q2

mysql> SELECT Ships.name, displacement, numGuns from Classes, Ships, Battles WHERE Battles.name = "Guadalcanal" AND Ships.date LIKE "%42%" AND Ships.class = Classes.class;
+---------+--------------+---------+
| name    | displacement | numGuns |
+---------+--------------+---------+
| Musashi |        65000 |       9 |
+---------+--------------+---------+
1 row in set (0.00 sec)


Q3

mysql> SELECT Ships.name FROM Ships union select Outcomes.ship from Outcomes;
+-----------------+
| name            |
+-----------------+
|                 |
| California      |
| Haruna          |
| Hiei            |
| Iowa            |
| Kirishima       |
| Kongo           |
| Missouri        |
| Musashi         |
| New Jersey      |
| North Carolina  |
| Ramillies       |
| Renown          |
| Repulse         |
| Resolution      |
| Revenge         |
| Royal Oak       |
| Royal Sovereign |
| Tennessee       |
| Washington      |
| Wisconsin       |
| Yamato          |
| Arizona         |
| Bismarck        |
| Duke of York    |
| Fuso            |
| Hood            |
| King George V   |
| Prince of Wales |
| Rodney          |
| Scharnhorst     |
| South Dakota    |
| West Virginia   |
| Yamashiro       |
+-----------------+
34 rows in set (0.00 sec)

Q4


SELECT temp2.country FROM (select country from Classes where type = "bb") temp1, (select country from Classes where type = "bc") temp2 WHERE temp1.country = temp2.country;

+-------------+
| country     |
+-------------+
| Japan       |
| Gt. Britain |
+-------------+
2 rows in set (0.00 sec)


Q5

mysql> select Outcomes.battle from Outcomes, Ships, Classes where Ships.name = Outcomes.ship and Ships.class = Classes.class GROUP BY Classes.country, Outcomes.battle having COUNT(Outcomes.ship) >= 3;
Empty set (0.00 sec)
