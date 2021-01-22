<?php

class ArrayInheritor extends ArrayObject
{
    public function __isset($name)
    {
        return $this[$name];
    }

    public function __get($name)
    {
        return $this[$name];
    }

    public function __set($name, $val)
    {
        $this[$name] = $val;
    }

    public function displayAsTable()
    {
        $html = '<table>';
        $html .= '<tbody>';
        $data = $this;
        foreach ($data as $key => $value) {
            $html .= '<tr>';
            $html .= '<td> ' . $key . '</td>';
            $html .= '<th>' . $value . '</th>';
            $html .= '</tr>';
        }
        $html .= '</tbody>';
        $html .= '</table>';
        return $html;
    }
}

$obj = new ArrayInheritor();
$obj->Name = 'Asif Muztaba';
$obj->Occupation = ' Senior Software Engineer';
$obj->Age = '27';
echo $obj->displayAsTable();