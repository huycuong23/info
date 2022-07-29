#include<iostream>
using namespace std;
int main() {
    int x=10;
    int t=0,y=0;
    int n;
    cout<<"Nhap so tuan : ";cin>>n;
    for(int i=2; i<=n; i++) {
        y=x*i;
        t=t+y;
    }
    cout << "tong tien : " << t+10;
}