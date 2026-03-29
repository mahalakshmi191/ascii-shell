#bin/sh

sudo apt-get install cowsay -y
cowsay -f drgon "Run for cover" >> dragon.txt
grep -i "dragon" dragon.txt
cat dragon.txt
ls -ltr