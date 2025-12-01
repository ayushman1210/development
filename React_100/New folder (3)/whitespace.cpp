#include <bits/stdc++.h>
using namespace std;
int main(){
string s;
cin>>s;
int i=0;
for(int j=1; j<s.size(); j++){
if(s[i]==' ' && s[j]!=' '){s[i]=s[j]; i++; }

}
}