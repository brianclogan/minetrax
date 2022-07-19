<?php 
return [
  'accepted' => ' :attribute має бути прийнято.',
  'active_url' => ' :attribute не є дійсною URL-адресою.',
  'after' => ' :attribute має бути датою після :date.',
  'after_or_equal' => ' :attribute має бути датою після або дорівнювати :date.',
  'alpha' => ' :attribute може містити лише літери.',
  'alpha_dash' => ' :attribute може містити лише літери, цифри, тире та підкреслення.',
  'alpha_num' => ' :attribute може містити лише літери та цифри.',
  'array' => ' :attribute має бути масивом.',
  'before' => ' :attribute має бути датою перед :date.',
  'before_or_equal' => ' :attribute має бути датою, що передує або дорівнює :date.',
  'between' => [
    'numeric' => ' :attribute має бути між :min і :max.',
    'file' => ' :attribute має бути між :min і :max кілобайтами.',
    'string' => 'Символ :attribute має бути між символами :min і :max.',
    'array' => ' :attribute має містити від :min до :max елементів.',
  ],
  'boolean' => 'Поле :attribute має мати значення true або false.',
  'confirmed' => 'Підтвердження :attribute не збігається.',
  'date' => ' :attribute не є дійсною датою.',
  'date_equals' => ' :attribute має бути датою, що дорівнює :date.',
  'date_format' => ' :attribute не відповідає формату :format.',
  'different' => ' :attribute і :other мають бути різними.',
  'digits' => ' :attribute має складатися з :digits цифр.',
  'digits_between' => ' :attribute має бути між :min і :max цифрами.',
  'dimensions' => ' :attribute має недійсні розміри зображення.',
  'distinct' => 'Поле :attribute має повторюване значення.',
  'email' => ' :attribute має бути дійсною електронною адресою.',
  'ends_with' => ' :attribute має закінчуватися одним із таких: :values.',
  'exists' => 'Вибраний :attribute недійсний.',
  'file' => ' :attribute має бути файлом.',
  'filled' => 'Поле :attribute повинно мати значення.',
  'gt' => [
    'numeric' => ' :attribute має бути більшим за :value.',
    'file' => ' :attribute має бути більшим за :value кілобайт.',
    'string' => 'Символ :attribute має бути більшим за :value.',
    'array' => ' :attribute має мати більше ніж :value елементів.',
  ],
  'gte' => [
    'numeric' => ' :attribute має бути більше або дорівнювати :value.',
    'file' => ' :attribute має бути більше або дорівнювати :value кілобайтам.',
    'string' => ' :attribute має бути більше або дорівнювати :value символів.',
    'array' => ' :attribute має містити :value елементів або більше.',
  ],
  'image' => ' :attribute має бути зображенням.',
  'in' => 'Вибраний :attribute недійсний.',
  'in_array' => 'Поле :attribute не існує в :other.',
  'integer' => ' :attribute має бути цілим числом.',
  'ip' => ' :attribute має бути дійсною IP-адресою.',
  'ipv4' => ' :attribute має бути дійсною адресою IPv4.',
  'ipv6' => ' :attribute має бути дійсною адресою IPv6.',
  'json' => ' :attribute має бути дійсним рядком JSON.',
  'lt' => [
    'numeric' => ' :attribute має бути меншим за :value.',
    'file' => ' :attribute має бути меншим за :value кілобайт.',
    'string' => 'Символ :attribute має бути менше ніж :value.',
    'array' => ' :attribute має містити менше ніж :value елементів.',
  ],
  'lte' => [
    'numeric' => ' :attribute має бути менше або дорівнювати :value.',
    'file' => ' :attribute має бути меншим або дорівнювати :value кілобайтам.',
    'string' => ' :attribute має бути менше або дорівнювати :value символів.',
    'array' => 'У :attribute не повинно бути більше :value елементів.',
  ],
  'max' => [
    'numeric' => ' :attribute не може бути більшим за :max.',
    'file' => ' :attribute не може перевищувати :max кілобайт.',
    'string' => ' :attribute не може бути більшим за :max символів.',
    'array' => ' :attribute не може мати більше :max елементів.',
  ],
  'mimes' => ' :attribute має бути файлом типу: :values.',
  'mimetypes' => ' :attribute має бути файлом типу: :values.',
  'min' => [
    'numeric' => ' :attribute має бути не менше :min.',
    'file' => ' :attribute має бути не менше :min кілобайт.',
    'string' => ' :attribute має бути принаймні :min символів.',
    'array' => ' :attribute має мати принаймні :min елементів.',
  ],
  'multiple_of' => ' :attribute має бути кратним :value',
  'not_in' => 'Вибраний :attribute недійсний.',
  'not_regex' => 'Формат :attribute недійсний.',
  'numeric' => ' :attribute має бути числом.',
  'password' => 'Пароль неправильний.',
  'present' => 'Поле :attribute повинно бути присутнім.',
  'regex' => 'Формат :attribute недійсний.',
  'required' => 'Поле :attribute є обов’язковим.',
  'required_if' => 'Поле :attribute є обов’язковим, якщо :other дорівнює :value.',
  'required_unless' => 'Поле :attribute є обов’язковим, якщо :other не знаходиться в :values.',
  'required_with' => 'Поле :attribute є обов’язковим, якщо присутній :values.',
  'required_with_all' => 'Поле :attribute є обов’язковим, якщо присутні :values.',
  'required_without' => 'Поле :attribute є обов’язковим, якщо :values немає.',
  'required_without_all' => 'Поле :attribute є обов’язковим, якщо немає жодного з :values.',
  'same' => ' :attribute і :other мають збігатися.',
  'size' => [
    'numeric' => ' :attribute має бути :size.',
    'file' => ' :attribute має бути :size кілобайт.',
    'string' => 'Символ :attribute має бути :size.',
    'array' => ' :attribute має містити :size елементів.',
  ],
  'starts_with' => ' :attribute має починатися з одного з наступного: :values.',
  'string' => ' :attribute має бути рядком.',
  'timezone' => ' :attribute має бути дійсною зоною.',
  'unique' => 'Х1 вже взято.',
  'uploaded' => 'Не вдалося завантажити :attribute.',
  'url' => 'Формат :attribute недійсний.',
  'uuid' => ' :attribute має бути дійсним UUID.',
  'custom' => [
    'attribute-name' => [
      'rule-name' => 'custom-message',
    ],
  ],
  'attributes' => [
  ],
];