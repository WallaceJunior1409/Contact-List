<?php

    namespace Database;

    class Connection
    {
        private static $connection;

        public static function openConnection()
        {
            if (!isset(self::$connection)) 
            {
                try 
                {
                    include_once 'config.php';

                    self::$connection = pg_connect(' host='.HOST.' port='.PORT.' dbname='.DATABASE.' user='.USER.' password='.PASSWORD.'');
                    return self::$connection;
                }
                catch (\Throwable $th) 
                {
                    print "Error : ".$th->getMessage()."<br>";
                }
            }
            return self::$connection;
        }

        public static function exitConnection()
        {
            if (isset(self::$connection)) {
                self::$connection  = null;
            }
        }

        public static function getConnection()
        {
            if (isset(self::$connection)) {
                return "Stab connection!";
            }
        }
    }
    
?>