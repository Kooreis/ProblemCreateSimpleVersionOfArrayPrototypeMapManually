```cpp
#include <iostream>
#include <vector>
#include <functional>

template<typename T>
std::vector<T> map(const std::vector<T>& arr, std::function<T(T)> func) {
    std::vector<T> result;
    for (const auto& element : arr) {
        result.push_back(func(element));
    }
    return result;
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    std::vector<int> result = map(arr, [](int num) { return num * 2; });

    for (const auto& element : result) {
        std::cout << element << " ";
    }

    return 0;
}
```