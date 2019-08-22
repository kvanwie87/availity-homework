package availity.homework

import org.apache.spark.sql.SparkSession
import org.apache.spark.SparkConf

object CSVProcessorRunner {
  def main(args: Array[String]): Unit = {
    val conf = new SparkConf()
    conf.setMaster("local[*]")
    conf.setAppName("AvailityHomeworkCSV")
    val sparkSession: SparkSession = SparkSession.builder().config(conf).getOrCreate()
    import sparkSession.implicits._
    CSVProcessor.processCSV(sparkSession, "src/main/resources/input/*.csv", "src/main/resources/output")
  }
}