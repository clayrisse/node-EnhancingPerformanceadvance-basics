We dont install nodemon because it does not work very well aot of the boz thist clustering


Tips:
When calculating the amount of cluster to use:
you want to match your number of "children" (clusters) either your phisical cours or logical cores you have. Like i4 i7 cores
Rememnber that, sometimes you OS interprets one processor or core as being two in case of multithreading stuff, so, a lot of documentacion you see around clustering uses logical cores instead
Personal opinion from stephen: use the number of PHISICAL CORES

Installing pm2:
npm install -g pm2

Running pm2:
pm2 start index.js -i 0
(the "-i" is to let pm2 decide the amound of clusters pending on the the CPU)

pm2 delete index (to reset all the cores available)

pm2 list (makes a list)

pm2 show index (detail list about that cluster or children)

pm2 monit ()