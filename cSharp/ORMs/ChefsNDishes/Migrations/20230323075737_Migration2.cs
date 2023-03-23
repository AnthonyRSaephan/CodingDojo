using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChefsNDishes.Migrations
{
    public partial class Migration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Tastiness",
                table: "dishes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Tastiness",
                table: "dishes");
        }
    }
}
